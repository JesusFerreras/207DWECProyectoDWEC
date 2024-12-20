<!doctype html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="author" content="Jesús Ferreras">
        <link rel="stylesheet" href="../webroot/css/estilos.css">
        <title>DWEC Tema 1</title>
    </head>
    <body>
        <header>
            <h1>Tema 1: Selección de arquitecturas y herramientas de programación</h1>
            <div>
                <a href="">&#10094; Anterior</a>
                <a href="../207DWECProyectoTema2/indexProyectoTema2.php">Siguiente &#10095;</a>
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
                        '01' => 'Prueba de js'
                    ];

                    foreach (scandir('.') as $entry) {
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
                ?>
            </table>
        </main>
        <footer>
            <a href="../../index.html">Jesús Ferreras González</a>
            <a href="../indexProyectoDWEC.php">DWEC</a>
            <a href="https://github.com/JesusFerreras/207DWECProyectoDWEC.git" target="_blank"><img src="../doc/github.png" alt="github"></a>
        </footer>
    </body>
</html>