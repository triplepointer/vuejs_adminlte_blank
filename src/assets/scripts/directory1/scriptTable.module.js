export default function(){
    $('#example1').DataTable({
      "paging": true,
      "lengthChange": true,
      "searching": true,
      "ordering": true,
      "autoWidth": false,
      "info": true,
      "responsive": true,
      "language": {
          'paginate': {
              'last': 'последняя',
              'next': 'след',
              'previous': 'пред'
          },
          "emptyTable": "В таблице пока нет информации.",
          "info": "Показана _PAGE_ из _PAGES_ страниц.",
          "infoEmpty": "Нет страниц",
          "infoFiltered": " - отфильтровано по _MAX_ значениям.",
          "thousands": "'",
          "loadingRecords": "Пожалуйста, подождите...",
          "search": "Поиск: ",
          "lengthMenu": 'Показать <select>' +
              '<option value="10">10</option>' +
              '<option value="20">20</option>' +
              '<option value="30">30</option>' +
              '<option value="40">40</option>' +
              '<option value="50">50</option>' +
              '<option value="-1">Все</option>' +
              '</select> на странице.'
      }
  });
}