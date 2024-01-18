<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Ejercicio 2</title>
</head>
<body>
    <form action="ejercicio2-resultados.php" method="post" enctype="multipart/form-data">
        <h1>Elementos de entrada</h1>

        <p>TEXT</p>
        <label for="cadena_buscar">Introduzca la cadena a buscar:</label>
        <input type="text" name="cadena_buscar" id="cadena_buscar" placeholder="valor por defecto">
        <hr>

        <p>RADIO</p>
        <p>Sexo:</p>
        <label><input type="radio" name="sexo" value="Mujer"> Mujer</label>
        <label><input type="radio" name="sexo" value="Hombre"> Hombre</label>

        <hr>
        <p>CHECKBOX</p>
        <p>Extras:</p>
        <label><input type="checkbox" name="extras[]" value="Garaje"> Garaje</label>
        <label><input type="checkbox" name="extras[]" value="Piscina"> Piscina</label>
        <label><input type="checkbox" name="extras[]" value="Jardín"> Jardín</label>

        <hr>

        <p>File:</p>
        <input type="file" name="archivo">
        <p>Nota: Lo veremos en el ejercicio 4.</p>

        <hr>

        <p>HIDDEN</p>
        <input type="hidden" name="oculto" value="Valor Oculto">

        <hr>

        <p>PASSWORD:</p>
        <input type="password" name="contrasena">

        <hr>

        <p>ELEMENTO SELECT</p>
        <P>Select Simple</P>
        <p>Color:</p>
        <select name="color">
            <option value="rojo">Rojo</option>
            <option value="verde">Verde</option>
            <option value="azul">Azul</option>
        </select>

        <hr>

        <p>SELECT MÚLTIPLE</p>
        <p>Idiomas:</p>
        <select name="idiomas[]" multiple>
            <option value="frances">Francés</option>
            <option value="aleman">Alemán</option>
            <option value="ingles">Inglés</option>
        </select>

        <hr>

        <p>ELEMENTO TEXTAREA</p>
        <p>Comentario:</p>
        <textarea name="comentario" rows="4" cols="50"></textarea>

        

        <br><br>

        <input type="submit" name="enviar" value="Enviar">
        <input type="reset" value="Borrar datos">
    </form>
    
</body>
</html>
