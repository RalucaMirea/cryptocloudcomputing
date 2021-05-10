import React from 'react';
import axios from "axios";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const nomicsToken = "9be8efec92e1c0b6deb7190b5ba0655f";

class CryptoDetails extends React.Component
{
    getAllCryptoCurrencies = () =>
    {
        axios 
        .get(`https://api.nomics.com/v1/prices?key=${nomicsToken}`)
        .then((response) => {
            response.data.sort((a, b) => b.price - a.price);
            this.setState({cryptoTopLst: response.data.slice(0, 15)});
        });
        return null;
    }

    componentDidMount() {
        this.getAllCryptoCurrencies();
    }
  
    constructor() 
    {
        super();
        this.state = {
            cryptoTopLst:  []
        };
    }

    render()
    {
        return (
            <React.Fragment>
            <p>------------ Top {this.state.cryptoTopLst.length} crypto moneds ------------</p>
            {
                this.state.cryptoTopLst != null &&
                <TableContainer component={Paper}>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Currency Name</TableCell>
                      <TableCell align="right">Price</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {this.state.cryptoTopLst.map((item) => (
                      <TableRow key={item.currency}>
                        <TableCell component="th" scope="row">
                          {item.currency}
                        </TableCell>
                        <TableCell align="right">
                          {item.price}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            }
            </React.Fragment>
        );
    }
}

export default CryptoDetails;