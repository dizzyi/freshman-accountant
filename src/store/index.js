import { createStore } from 'vuex'


//// All should store in cent
//// $15 -> 1500
export default createStore({
  state: {
    accounts:[
      {
        id: 827,
        title:"Owern's Equity",
        type: 'equity',
        balance: 0
      },
      {
        id: 1216,
        title:"Cash",
        type: 'asset',
        balance: 0
      },
      {
        id: 9999,
        title:"Note Payable",
        type: 'liability',
        balance: 0
      }
    ],
    entries:[
      {
        id: 45463,
        transections: [
          {
            accountId: 827,amount: 100,
          },
          {
            accountId: 1216,amount: -100,
          }
        ],
        date: '2021-02-17',
        description:'initial investment',
      },
      {
        id: 468113,
        transections:[
          {
            accountId: 1216, amount: -1000
          },
          {
            accountId: 9999, amount: 1000
          },
          {
            accountId: 827, amount: 250
          }
        ],
        date: '2021-02-18',
        description:'Loan from bank',
      }
    ] 
  },
  getters: {
    getAllAccounts: state => {
      
      state.accounts.forEach(ac=>{
        ac.balance = 0;
      })
      
      state.entries.forEach((ent)=>{
        ent.transections.forEach(tran=>{
          state.accounts.find(ac=>ac.id==tran.accountId).balance += tran.amount;
        })

      })
      return state.accounts;
    },

    getACtitlebyId: (state) => (_id) =>{
      let _ac = state.accounts.find( ac=> ac.id == _id);
      let _title = _ac ? _ac.title : undefined;
      return _title;
    },

    getIdbyACtitle: (state)=> (_title)=>{
      let _ent =  state.accounts.find( ac => ac.title == _title );
      let _id = _ent ? _ent.id : -1;
      return _id;
    },
    
    getAllEntries: state =>{
      return state.entries;
    },

    getEntrybyId: (state) => (_id) => {
      return state.entries.find( ent => ent.id == _id );
    } 
  },
  mutations: {
    insertEntry(state, ent){
      state.entries.push(ent);
    }
  },
  actions: {
  },
  modules: {
  }
})
