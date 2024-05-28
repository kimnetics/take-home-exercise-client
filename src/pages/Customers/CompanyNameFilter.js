import { useEffect, useState } from 'react'

import Autocomplete from '@mui/material/Autocomplete'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'

import * as common from '../../common'

export default function CompanyNameFilter ({ companyNameFilter, setCompanyNameFilter, searchParams, setSearchParams }) {
  const [companyNames, setCompanyNames] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/v1/companies')
      .then(response => {
        return response.json()
      })
      .then(data => {
        const companyNames = data.map((company) => {
          return company.companyName
        })
        setCompanyNames([common.FILTER_ALL_COMPANIES].concat(companyNames))
      })
  }, [])

  return (
    <>
      <Paper>
        <Autocomplete
          options={companyNames}
          renderInput={(params) => <TextField {...params} />}
          value={companyNameFilter}
          onChange={(event, newValue) => {
            if (newValue) {
              setCompanyNameFilter(newValue)
              const sort = searchParams.get('sort').toLowerCase()
              setSearchParams({ filter: newValue, sort: sort })
            }
          }}
          disableClearable
        />
      </Paper>
    </>
  )
}
