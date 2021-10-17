<?php
    if(isset($_POST["documento_num"])){
        // echo nl2br("<p>El Apellido enviado es: </p>").$_POST["apellido"]; $_POST["nombre_txt"]
        // echo nl2br("<p>Los Tipos de documento son: </p>").$_POST["opc_documento"];
        // echo nl2br("<p>El número de documento es: </p>").$_POST["documento_num"];
        // echo nl2br("<p>Los tipos de vacuna son: </p>").$_POST["opc_vacuna"];
        
        // foreach($_POST as $nombre_campo => $valor)
        // {
        //     $message .= '$' . $nombre_campo . '=\'' . $valor . '\';<br />'; 
        // }
        // echo $message;
        $salida = implode(",", $_POST).chr(10);
        
        
    }

    $archivoDatos = fopen('tabla-vacunas.txt', 'a');
    fwrite($archivoDatos, $salida);
    header('Location: index.html');
?>