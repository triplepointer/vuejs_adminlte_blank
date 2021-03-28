<template>
    <Wrapper>
  <Navbar/>
  <MainSidebar/>
  <ContentWrapper>
    <template v-slot:content-header>
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Справочник 2</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Справочник 2</li>
            </ol>
          </div>
        </div>
    </template>
    <template v-slot:content>
        <div class="row">
            <div class="col-md-12">
                <CardWithFooter>
            <template v-slot:header>
                <CardTitle>Bordered Table</CardTitle>
            </template>
            <template v-slot:body>
                <BorderedTable>
                    <template v-slot:head>
                    <tr>
                      <th>id</th>
                      <th>userId</th>
                      <th>title</th>
                      <th>completed</th>
                    </tr>
                    </template>
                    <template v-slot:body>
                    <tr :key="key" v-for="(dataItem, key) in paginatedItems">
                      <td>{{dataItem.id}}</td>
                      <td>{{dataItem.userId}}</td>
                      <td>{{dataItem.title}}</td>
                      <td>{{dataItem.completed}}</td>
                    </tr>
                    </template>
                </BorderedTable>
            </template>
            <template v-slot:footer>
                <ul class="pagination flex-wrap pagination-sm m-0 float-right">
                  <li class="page-item"><a class="page-link" href="#">&laquo;</a></li>
                  <li class="page-item" @click.prevent="pageClick(page)" :key="index" v-for="(page, index) in pages"><a class="page-link" href="#">{{page}}</a></li>
                  <li class="page-item"><a class="page-link" href="#">&raquo;</a></li>
                </ul>
            </template>
        </CardWithFooter>
            </div>
        </div>
    </template>
  </ContentWrapper>
  <MainFooter />
  <ControlSidebar />
</Wrapper>
</template>

<script>
import MainSidebar from '@/components/Sidebars/MainSidebar/MainSidebar';
import MainFooter from '@/components/Footers/MainFooter';
import Navbar from '@/components/Navbar/Navbar';
import Wrapper from '@/components/Wrappers/Wrapper';
import ControlSidebar from '@/components/Sidebars/ControlSidebar/ControlSidebar';
import ContentWrapper from '@/components/Wrappers/ContentWrapper';
// Styles
// Google Font: Source Sans Pro
// Font Awesome
import FontAwesome from "@/../node_modules/admin-lte/plugins/fontawesome-free/css/all.min.css";
// Theme style
import AdminLTECSS from "@/../node_modules/admin-lte/dist/css/adminlte.min.css"

// Scripts

// jQuery
import jQuery from "@/../node_modules/admin-lte/plugins/jquery/jquery.min.js"
// Bootstrap 4
import BootstrapJS from "@/../node_modules/admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js"
// AdminLTE App
import AdminLTEApp from  "@/../node_modules/admin-lte/dist/js/adminlte.min.js"
import BorderedTable from '../../Tables/SimpleTables/BorderedTable.vue';
import CardWithFooter from '@/components/Cards/CardWithFooter';
import axios from 'axios';

export default {
    name: "Directory1",
    components: {
        MainSidebar,
        MainFooter,
        Navbar,
        Wrapper,
        ControlSidebar,
        ContentWrapper,
        BorderedTable,
        CardWithFooter
    },
data() {
    return {
      data: [],
      dataItemsPerPage: 10,
      // numberOfSteps: 0,
      pageNumber: 1,
      // steps: []
    }
  },
  computed: {
    pages() {
      return Math.ceil(this.data.length / 10);
    },
    paginatedItems() {
      let from = (this.pageNumber - 1)*this.dataItemsPerPage;
      let to = from + this.dataItemsPerPage;
      return this.data.slice(from,to);
    }
  },
  methods: {
    pageClick(page){
      this.pageNumber = page;
    }
  },
  beforeCreate() {
      axios
      .get('https://jsonplaceholder.typicode.com/todos/')
      .then(({ data })=> {
          this.data = data;
          // this.end = data.length;
          // this.numberOfSteps = 
          // for(let i = 1; i <= this.numberOfSteps; i++)
          //   this.steps.push(i);
          console.log(data);
      })
      .catch((err)=> {})
  }
}
</script>