<!doctype html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="author" content="Jesús Ferreras">
        <link rel="stylesheet" href="../swebroot/css/estilos.css">
        <title>DWEC Tema 5</title>
    </head>
    <body>
        <header>
            <h1>Tema 5: Interacción con el usuario, eventos y formularios</h1>
            <div>
                <a href="../207DWESProyectoTema4/indexProyectoTema4.php">&#10094; Anterior</a>
                <a href="">Siguiente &#10095;</a>
            </div>
        </header>
        <main>
            <table class="contenido">
                <tr>
                    <th>Nº</th>
                    <th>Enunciado</th>
                    <th>Ejecutar</th>
                </tr>
                <?php
                    $enunciados = [
                        '01' => 'Pruebas con eventos I',
                        '02' => 'Pruebas con eventos II',
                        '03' => 'Pruebas con eventos de ratón y teclado',
                        '04' => 'Pruebas con eventos de reproducción de multimedia',
                        '05' => 'Pruebas con eventos de arrastre',
                        '06' => 'Pruebas con eventos de formulario I',
                        '07' => 'Pruebas con eventos de formulario II',
                        '08' => 'Pruebas con eventos III'
                    ];

                    if ($handle = scandir('.')) {
                        foreach ($handle as $entry) {
                            if (preg_match('/^[0-9]+$/', $entry)) {
                                $fichero = $entry.'/'.$entry.'.html';
                                print(<<<FIN
                                    <tr>
                                        <td>$entry</td>
                                        <td>$enunciados[$entry]</td>
                                        <td><a href="$fichero">&#x25B6;</a></td>
                                    </tr>
                                FIN);
                            }
                        }
                    }
                ?>
            </table>
        </main>
        <footer>
            <a href="../../index.html">Jesús Ferreras González</a>
            <a href="..//indexProyectoDWEC.php">DWEC</a>
            <a href="https://github.com/JesusFerreras/207DWECProyectoDWEC.git" target="_blank"><img src="doc/github.png" alt="github"></a>
        </footer>
    </body>
</html>