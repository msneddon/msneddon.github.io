
import React, { Component } from 'react';

import { Grid, Row, Cell } from 'react-inline-grid';

import FlipMove from 'react-flip-move';

import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';


import pubData from './data/publications.json'


const style = {
  padding: 15,
  width: '100%',
  margin: 10,
  textAlign: 'left',
  display: 'inline-block',
};



const getARProps = () => {
    return {
        itemMargin: 100
    }
  };


class Publications extends Component {

  constructor() {
    super();
    this.state = {
      sort_by: ['year', 'name', 'journal'],
      sort_by_selection: 'year',
      search_filter: '',
    };
  }

  updateSortOrder = (event, index, order) => {
    let new_sort_by = [order];
    for(let o of this.state.sort_by) {
        if(o === order) continue;
        new_sort_by.push(o);
    }
    this.setState({sort_by: new_sort_by});
    this.setState({sort_by_selection: order})
  }

  search = (event, term) => {
    console.log(term);
    this.setState({search_filter: term.trim()})
  }


  generateCards = () => {
    var cards = [];
    // sort
    let sortField = this.state.sort_by_selection;
    pubData.sort((a, b) => b[sortField] > a[sortField])

    let filter = this.state.search_filter;
    for(let pub of pubData) {

      if(filter !== '') {
        let found = false;
        if(pub.name.includes(filter)) {
          found = true;
        }
        if(pub.abstract && pub.abstract.includes(filter)) {
          found = true;
        }
        if(!found) continue;
      }


      cards.push(
        <Paper key={pub.name} style={style} zDepth={2} >
          <b>{pub.name}</b><br />
          {pub.year}
        </Paper>
        );
    }
    return cards;
  }




  render() {
    console.log(pubData);


    //champions.sort((a, b) => b.level - a.level)







    return (
      <center>
        <div style={{width:800, textAlign:'left'}}>


          <h2>Publications</h2>

          <Grid>
          <Row is="between">
            <Cell is="6 tablet-4 phone-2">
              <TextField
                hintText="Search"
                onChange={this.search}
              />
            </Cell>
            <Cell is="bottom 6 tablet-4 phone-2">
              <SelectField
                floatingLabelText="Sort by"
                value={this.state.sort_by_selection}
                onChange={this.updateSortOrder}
              >
                <MenuItem value={'year'} primaryText="Publication date" />
                <MenuItem value={'name'} primaryText="Article Name" />
                <MenuItem value={'journal'} primaryText="Journal" />
              </SelectField>
            </Cell>
          </Row>
          </Grid>
          


          

          <br />

          <FlipMove enterAnimation="fade" leaveAnimation="none" duration={600} staggerDurationBy={10}>
            { this.generateCards() }
          </FlipMove>
        </div>
      </center>
    );
  }
}

export default Publications;

