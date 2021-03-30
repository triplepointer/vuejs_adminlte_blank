<template>
<Wrapper>
  <Navbar/>
  <MainSidebar/>
  <ContentWrapper>
    <template v-slot:content-header>
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Blank Page</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Blank Page</li>
            </ol>
          </div>
        </div>
    </template>
    <template v-slot:content>
<!-- Default box -->
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Title</h3>

          <div class="card-tools">
            <button type="button" class="btn btn-tool" data-card-widget="collapse" title="Collapse">
              <i class="fas fa-minus"></i>
            </button>
            <button type="button" class="btn btn-tool" data-card-widget="remove" title="Remove">
              <i class="fas fa-times"></i>
            </button>
          </div>
        </div>
        <div class="card-body">
          Start creating your amazing application!
        </div>
        <!-- /.card-body -->
        <div class="card-footer">
          Footer
        </div>
        <!-- /.card-footer-->
      </div>
      <!-- /.card -->

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
export default {
  name: 'BlankPage',
  components: {
    ControlSidebar,
    MainFooter,
    MainSidebar,
    Navbar,
    Wrapper,
    ContentWrapper,
  },
  mounted() {
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback");
</style>
