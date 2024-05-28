import Autocomplete from '@mui/material/Autocomplete'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'

import * as common from '../../common.js'

export default function CustomerSort ({ customerSort, setCustomerSort, searchParams, setSearchParams }) {
  return (
    <>
      <Paper>
        <Autocomplete
          options={[
            common.SORT_FIRST_NAME_DESC,
            common.SORT_FIRST_NAME_ASC,
            common.SORT_LAST_NAME_DESC,
            common.SORT_LAST_NAME_ASC,
            common.SORT_COMPANY_NAME_DESC,
            common.SORT_COMPANY_NAME_ASC
          ]}
          renderInput={(params) => <TextField {...params} />}
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
      </Paper>
    </>
  )
}
