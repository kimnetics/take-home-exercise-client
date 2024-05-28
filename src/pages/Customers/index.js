import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Stack'

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
      <Container
        sx={{
          width: '800px',
          backgroundColor: 'rgb(180,180,180)',
          padding: '10px',
          boxSizing: 'border-box'
        }}>
        <Stack
          sx={{
            alignItems: 'center',
            width: '100%',
            padding: '14px',
            boxSizing: 'border-box',
            margin: 'auto',
          }}
          spacing="20px">
          <Stack sx={{ alignItems: 'flex-start', width: '100%' }} spacing="5px">
            <Typography
              variant="p"
              sx={{
                fontFamily: 'var(--theme-font-family)',
                color: 'var(--theme-color-secondary)',
                fontSize: '18px',
                fontWeight: '600',
              }}>
              Customers
            </Typography>
          </Stack>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
              alignItems: 'center',
            }}>
            <Stack
              sx={{
                alignItems: 'flex-start',
                width: '100%',
                flex: '1',
                minWidth: '280px',
              }}
              spacing="5px">
              <Typography
                variant="subtitle1"
                sx={{
                  fontFamily: 'var(--theme-font-family)',
                  color: 'var(--theme-color-secondary)',
                }}>
                Filter by company
              </Typography>
              <Box sx={{ width: '100%' }}>
                <CompanyNameFilter companyNameFilter={companyNameFilter}
                                   setCompanyNameFilter={setCompanyNameFilter}
                                   searchParams={searchParams}
                                   setSearchParams={setSearchParams}/>
              </Box>
            </Stack>
            <Stack
              sx={{
                alignItems: 'flex-start',
                width: '100%',
                flex: '1',
                minWidth: '280px',
              }}
              spacing="5px">
              <Typography
                variant="subtitle1"
                sx={{
                  fontFamily: 'var(--theme-font-family)',
                  color: 'var(--theme-color-secondary)'
                }}>
                Sort by
              </Typography>
              <Box sx={{ width: '100%' }}>
                <CustomerSort customerSort={customerSort}
                              setCustomerSort={setCustomerSort}
                              searchParams={searchParams}
                              setSearchParams={setSearchParams}/>
              </Box>
            </Stack>
          </Box>
          <Stack
            sx={{
              alignItems: 'flex-start',
              width: '100%',
              flex: '1',
              minWidth: '280px',
            }}
            spacing="5px">
            <Stack sx={{ alignItems: 'center', gap: '6px' }} direction="row">
              <Typography
                variant="subtitle1"
                sx={{
                  fontFamily: 'var(--theme-font-family)',
                  color: 'var(--theme-color-secondary)'
                }}>
                Customer list
              </Typography>
            </Stack>
            <Box sx={{ width: '100%' }}>
              <CustomerList companyNameFilter={companyNameFilter}
                            customerSort={customerSort}/>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </>
  )
}
