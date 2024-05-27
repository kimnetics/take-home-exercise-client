import { useEffect, useState } from 'react'

import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

import * as common from '../../common.js'

export default function CustomerList ({ companyNameFilter, customerSort }) {
  const [customers, setCustomers] = useState([{}])

  let requestUrl = 'http://localhost:4000/v1/customers'

  let customerSortParameter = '?sort='
  switch (customerSort) {
    case common.SORT_FIRST_NAME_DESC:
      customerSortParameter += 'firstName|desc'
      break
    case common.SORT_FIRST_NAME_ASC:
      customerSortParameter += 'firstName|asc'
      break
    case common.SORT_LAST_NAME_DESC:
      customerSortParameter += 'lastName|desc'
      break
    case common.SORT_LAST_NAME_ASC:
      customerSortParameter += 'lastName|asc'
      break
    case common.SORT_COMPANY_NAME_DESC:
      customerSortParameter += 'companyName|desc'
      break
    case common.SORT_COMPANY_NAME_ASC:
      customerSortParameter += 'companyName|asc'
      break
    default:
      console.log(`Unexpected customer sort option '${customerSort}'.`)
  }
  requestUrl += customerSortParameter

  if (companyNameFilter !== common.FILTER_ALL_COMPANIES) {
    requestUrl += `&filter=companyName|${encodeURIComponent(companyNameFilter)}`
  }

  requestUrl += '&limit=8'

  useEffect(() => {
    fetch(requestUrl)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setCustomers(data || [])
      })
  }, [requestUrl])

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Company Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map((customer) => (
              <TableRow key={customer.firstName + '~' + customer.lastName}>
                <TableCell>{customer.firstName}</TableCell>
                <TableCell>{customer.lastName}</TableCell>
                <TableCell>{customer.companyName}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}
