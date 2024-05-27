import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'

import * as common from '../../common.js'

export default function CustomerSort ({ customerSort, setCustomerSort, searchParams, setSearchParams }) {
  return (
    <>
      <Autocomplete
        options={[
          common.SORT_FIRST_NAME_DESC,
          common.SORT_FIRST_NAME_ASC,
          common.SORT_LAST_NAME_DESC,
          common.SORT_LAST_NAME_ASC,
          common.SORT_COMPANY_NAME_DESC,
          common.SORT_COMPANY_NAME_ASC
        ]}
        style={{ width: 300 }}
        renderInput={(params) => <TextField {...params} variant="outlined"/>}
        value={customerSort}
        onChange={(event, newValue) => {
          if (newValue) {
            setCustomerSort(newValue)

            let newValueCode = common.SORT_FIRST_NAME_DESC_CODE
            switch (newValue) {
              case common.SORT_FIRST_NAME_DESC:
                newValueCode = common.SORT_FIRST_NAME_DESC_CODE
                break
              case common.SORT_FIRST_NAME_ASC:
                newValueCode = common.SORT_FIRST_NAME_ASC_CODE
                break
              case common.SORT_LAST_NAME_DESC:
                newValueCode = common.SORT_LAST_NAME_DESC_CODE
                break
              case common.SORT_LAST_NAME_ASC:
                newValueCode = common.SORT_LAST_NAME_ASC_CODE
                break
              case common.SORT_COMPANY_NAME_DESC:
                newValueCode = common.SORT_COMPANY_NAME_DESC_CODE
                break
              case common.SORT_COMPANY_NAME_ASC:
                newValueCode = common.SORT_COMPANY_NAME_ASC_CODE
                break
              default:
                newValueCode = common.SORT_FIRST_NAME_DESC_CODE
            }
            const filter = searchParams.get('filter')
            setSearchParams({ filter: filter, sort: newValueCode })
          }
        }}
        disableClearable
      />
    </>
  )
}
