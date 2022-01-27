import { LightningElement } from "lwc";

export default class App extends LightningElement {

  columns = [
    {
      index : 1,
      name : "January"
    },
    {
      index : 2,
      name : "February"
    },
    {
      index : 3,
      name : "March"
    },
    {
      index : 4,
      name : "April"
    },
    {
      index : 5,
      name : "May"
    },
    {
      index : 6,
      name : "June"
    },
    {
      index : 7,
      name : "July"
    },
    {
      index : 8,
      name : "August"
    },
    {
      index : 9,
      name : "September"
    },
    {
      index : 10,
      name : "October"
    },
    {
      index : 11,
      name : "November"
    },
    {
      index : 12,
      name : "December"
    }
  ];
  
  rowone = [
    {
      index : 1,
      name : "Planning",
      start : "January",
      end : "January"
    },
    {
      index : 2,
      name : "Analysis",
      start : "January",
      end : "January"
    }
  ];

  rowtwo = [
    {
      index : 1,
      name : "Development",
      start : "February",
      end : "February"
    },
    {
      index : 2,
      name : "Test Planning",
      start : "February",
      end : "February"
    }
  ];

  rowthree = [
    {
      index : 1,
      name : "Bug Fixes",
      start : "March",
      end : "May"
    },
    {
      index : 2,
      name : "Test Execution",
      start : "March",
      end : "April"
    }
  ];

  constructor(){
    super();
    this.rowdata.push(this.rowone);
    this.rowdata.push(this.rowtwo);
    this.rowdata.push(this.rowthree);
  }

  rowdata = [];
  chartrowdata = [];

  connectedCallback(){
    this.processRowData();
  }

  processRowData(){

    this.rowdata.forEach((row,index)=>{
      let chartrow = [];

      row.forEach(item=>{
        let start = this.columns.findIndex(column=>{return column.name == item.start});
        let end = this.columns.findIndex(column=>{return column.name == item.end});
        let leftoffset = start == 0 ? '' : start;
        let rightoffset = end == 11 ? '' : Number(11-end);
        let size = (end-start)+1;;
        chartrow.push({
          index : item.index,
          left : leftoffset?.toString(),
          size : size.toString(),
          right : rightoffset?.toString(),
          name : item.name
        })
      });

      this.chartrowdata.push({
        row : chartrow,
        index : index+1
      });
    });
    console.log(this.chartrowdata);
  }
}
