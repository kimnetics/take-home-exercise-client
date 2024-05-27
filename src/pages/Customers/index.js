import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import CompanyNameFilter from './CompanyNameFilter'
import CustomerList from './CustomerList'
import CustomerSort from './CustomerSort'

import * as common from '../../common'

export default function Customers () {
  const [searchParams, setSearchParams] = useSearchParams({
    filter: common.FILTER_ALL_COMPANIES,
    sort: common.SORT_FIRST_NAME_DESC_CODE
  })

  let defaultFilter = common.FILTER_ALL_COMPANIES
  const filter = searchParams.get('filter')
  if (filter) {
    defaultFilter = filter
  }
  const [companyNameFilter, setCompanyNameFilter] = useState(defaultFilter)

  let defaultSort = common.SORT_FIRST_NAME_DESC
  const sort = searchParams.get('sort').toLowerCase()
  if (sort) {
    switch (sort) {
      case common.SORT_FIRST_NAME_DESC_CODE:
        defaultSort = common.SORT_FIRST_NAME_DESC
        break
      case common.SORT_FIRST_NAME_ASC_CODE:
        defaultSort = common.SORT_FIRST_NAME_ASC
        break
      case common.SORT_LAST_NAME_DESC_CODE:
        defaultSort = common.SORT_LAST_NAME_DESC
        break
      case common.SORT_LAST_NAME_ASC_CODE:
        defaultSort = common.SORT_LAST_NAME_ASC
        break
      case common.SORT_COMPANY_NAME_DESC_CODE:
        defaultSort = common.SORT_COMPANY_NAME_DESC
        break
      case common.SORT_COMPANY_NAME_ASC_CODE:
        defaultSort = common.SORT_COMPANY_NAME_ASC
        break
      default:
        defaultSort = common.SORT_FIRST_NAME_DESC
    }
  }
  const [customerSort, setCustomerSort] = useState(defaultSort)

  return (
    <>
      <CompanyNameFilter companyNameFilter={companyNameFilter}
                         setCompanyNameFilter={setCompanyNameFilter}
                         searchParams={searchParams}
                         setSearchParams={setSearchParams}/>
      <CustomerSort customerSort={customerSort}
                    setCustomerSort={setCustomerSort}
                    searchParams={searchParams}
                    setSearchParams={setSearchParams}/>
      <CustomerList companyNameFilter={companyNameFilter}
                    customerSort={customerSort}/>
    </>
  )
}
