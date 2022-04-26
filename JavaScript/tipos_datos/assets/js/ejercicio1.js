
    const edadLegal = 18;
    const esMayor = fechaNac => {
      if(!fechaNac || isNaN(new Date(fechaNac))) return;
      const hoy = new Date();
      const dateNac = new Date(fechaNac);
      if(hoy - dateNac < 0) return;
      const years = hoy.getUTCFullYear() - dateNac.getUTCFullYear();
      if(years < edadLegal) return false;
      if(years > edadLegal) return true;
      const meses = hoy.getUTCMonth() - dateNac.getUTCMonth();
      if(meses < 0) return false;
      if(meses > 0) return true;
      const dias = hoy.getUTCDate() - dateNac.getUTCDate();
      if(dias < 0) return false;
      return true;
    }
    const edad = fechaNac => {
      if(!fechaNac || isNaN(new Date(fechaNac))) return;
      const hoy = new Date();
      const dateNac = new Date(fechaNac);
      if(hoy - dateNac < 0) return;
      let dias = hoy.getUTCDate() - dateNac.getUTCDate();
      let meses = hoy.getUTCMonth() - dateNac.getUTCMonth();
      let years = hoy.getUTCFullYear() - dateNac.getUTCFullYear();
      if(dias < 0) {
        meses--;
        dias = 30 + dias;
      }
      if(meses < 0) {
        years--;
        meses = 12 + meses;
      }
      
      return [years, meses, dias];
    }
    
    $('#fechaNac').change(e => {
      let mayor = esMayor(e.currentTarget.value);
      let suEdad = edad(e.currentTarget.value);
      if(mayor) {
        $('#salida').text(`Usted es mayor de ${edadLegal} años`);
      } else {
        if(mayor === false) {
        $('#salida').text(`Usted es menor de ${edadLegal} años`);
        } else {
          $('#salida').text('Fecha no válida, verifique');
        }
      }
      if(suEdad) {
        $('#edad').val(`${suEdad[0]} año(s), ${suEdad[1]} mes(es) y ${suEdad[2]} día(s).`);
      } else {
        $('#edad').val('');
      }
    });












































    