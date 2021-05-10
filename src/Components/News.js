import React from 'react';
import axios from "axios";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import { Autocomplete } from '@material-ui/lab';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
const finnhubToken = "c2bc78aad3i8k5kfok1g";

// styles for the News component
const styles = theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    table: {
        minWidth: 650,
    },
});

class News extends React.Component
{
    // finnhub api functions
    getSymbolsRequest = () =>
    {
        axios
        .get(`https://finnhub.io/api/v1/stock/symbol?exchange=US&token=${finnhubToken}`)
        .then((response) => {
            this.setState({symbols: response.data});
        });
    }

    getNewsRequest = (event, newValue) => {
        var stop = new Date();
        var start = new Date();
        start.setDate(start.getDate() - 90);
        start = start.toISOString().split("T")[0];
        stop = stop.toISOString().split("T")[0];
        axios
        .get(
            `https://finnhub.io/api/v1/company-news?symbol=${newValue}&from=${start}&to=${stop}&token=${finnhubToken}`
        )
        .then((response) => {
            this.setState({newsList: response.data});
        });
    }

    componentDidMount() {
        this.getSymbolsRequest();
    }
  
    constructor() 
    {
        super();
        this.state = {
            newsList:  [],
            symbols: []
        };
    }

    render()
    {
        const { classes } = this.props;
        const { symbols } = this.state;
        return (
            symbols != null &&
            <React.Fragment>
            <FormControl className={classes.formControl}>
              <Autocomplete
                id="combo-box-demo"
                options={this.state.symbols.map((symbol) => symbol.symbol)}
                getOptionLabel={(option) => option}
                style={{ width: 300 }}
                renderInput={(params) => (
                    <TextField {...params} label="Symbol name" variant="outlined" />
                )}
                onChange={this.getNewsRequest.bind(this)}
              />
          </FormControl>
            {this.state.newsList != null || this.state.newsList.size() !== 0  ?
            <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Headline</TableCell>
                  <TableCell align="right">Detalis</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.newsList.map((item) => (
                  <TableRow key={item.headline}>
                    <TableCell component="th" scope="row">
                      {item.headline}
                    </TableCell>
                    <TableCell align="right">
                      <Button
                        variant="outlined"
                        color="primary"
                        target="_blank"
                        href={item.url}
                      >
                        More information
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>:
          <p>No information about this symbol</p>}
          </React.Fragment>
        );
    }
}

export default withStyles(styles)(News);