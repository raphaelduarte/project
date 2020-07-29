<template>
  <div>
    <div class="horario col-sm-4">
      <table class="table table-hover">
        <tbody>
          <tr>
            <td>Data</td>
            <td>
              <input class="col-sm-10" type="text" placeholder="Area para comentario" />
            </td>
          </tr>
          <tr>
            <td>Horario</td>
            <td>
              <select class="custom-select" id="inputGroupSelect01">
                <option selected>Selecione...</option>
                <option value="1">8:00</option>
                <option value="2">15:30</option>
                <option value="3">19:30</option>
                <option value="4">20:00</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.horario {
  float: left;
}
</style>