const sequelize = require('../../db/db_sequelize');
const {QueryTypes} = require('sequelize');
var nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

/////
 async function emailRegistro(datos)  {
  const { email, nombre, token } = datos;

  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
console.log(transport);
  // Información del email

  const info = await transport.sendMail({
    from: '"Paluz" <soporte@paluz.org>',
    to: email,
    subject: "Paluz - Comprueba tu cuenta",
    text: "Comprueba tu cuenta en Paluz",
    html: `<p>Hola: ${nombre} Comprueba tu cuenta en Paluz</p>
    <p>Tu cuenta ya esta casi lista, solo debes comprobarla en el siguiente enlace: 

    <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Comprobar Cuenta</a>
    
    <p>Si tu no creaste esta cuenta, puedes ignorar el mensaje</p>
    
    
    `,
  });
};
////
async function emailOlvidePassword (datos) {
  const { email, nombre, token } = datos;

  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Información del email

  const info = await transport.sendMail({
    from: '"Maraguias - Tu Guia Virtual Interactiva" <tesis2023@mline.cl>',
    to: email,
    subject: "Maraguias - Reestablece tu Password",
    text: "Reestablece tu Password",
    html: `<p>Hola: ${nombre} has solicitado reestablecer tu password</p>

    <p>Sigue el siguiente enlace para generar un nuevo password: 

    <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Reestablecer Password</a>
    
    <p>Si tu no solicitaste este email, puedes ignorar el mensaje</p>
    
    
    `,
  });
};
////////
async function enviar (datos) {
    const { email, nombre, token } = datos;



  console.log(datos,'Envio de Correosss')

  const msg = {
    to: email,
    from: 'jpirela@paluz.org', // Use the email address or domain you verified above
    subject: "Admisión a PALUZ",
    text: 'prueba',
    html:`  <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700,700i" rel="stylesheet"><!--<![endif]-->
    <style type="text/css">
  #outlook a {
    padding:0;
  }
  .ExternalClass {
    width:100%;
  }
  .ExternalClass,
  .ExternalClass p,
  .ExternalClass span,
  .ExternalClass font,
  .ExternalClass td,
  .ExternalClass div {
    line-height:100%;
  }
  .es-button {
    mso-style-priority:100!important;
    text-decoration:none!important;
  }
  a[x-apple-data-detectors] {
    color:inherit!important;
    text-decoration:none!important;
    font-size:inherit!important;
    font-family:inherit!important;
    font-weight:inherit!important;
    line-height:inherit!important;
  }
  .es-desk-hidden {
    display:none;
    float:left;
    overflow:hidden;
    width:0;
    max-height:0;
    line-height:0;
    mso-hide:all;
  }
  
  @media only screen and (max-width:600px) {.bg-img { background-image:none!important;} p, ul li, ol li, a { line-height:150%!important } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120%!important } h1 { font-size:32px!important; text-align:left } h2 { font-size:26px!important; text-align:left } h3 { font-size:20px!important; text-align:left } h1 a { text-align:left } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:36px!important } h2 a { text-align:left } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:30px!important } h3 a { text-align:left } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:18px!important } .es-menu td a { font-size:16px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:16px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:16px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:inline-block!important } a.es-button, button.es-button { font-size:16px!important; display:inline-block!important; padding:15px 30px 15px 30px!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; max-height:inherit!important }; }
  </style>
   </head>
   <body style="width:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;padding:0;Margin:0">
    <div class="es-wrapper-color" style="background-color:#EEEEEE"><!--[if gte mso 9]>
        <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="tile" color="#eeeeee"></v:fill>
        </v:background>
      <![endif]-->
     <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#EEEEEE">
       <tr style="border-collapse:collapse">
        <td valign="top" style="padding:0;Margin:0">
         <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
           <tr style="border-collapse:collapse"></tr>
           <tr style="border-collapse:collapse">
            <td align="center" style="padding:0;Margin:0">
             <table class="es-header-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#ffffff;width:600px" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center">
               <tr style="border-collapse:collapse">
                <td align="left" style="Margin:0;padding-top:35px;padding-left:35px;padding-right:35px;padding-bottom:40px">
                 <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                   <tr style="border-collapse:collapse">
                    <td valign="top" align="center" style="padding:0;Margin:0;width:530px">
                     <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                       <tr style="border-collapse:collapse">
                        <td align="center" style="padding:0;Margin:0;font-size:0px"><img class="adapt-img" src="https://i.ibb.co/ZL8Pdc8/paluzlogo.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="400"></td>
                       </tr>
                     </table></td>
                   </tr>
                 </table></td>
               </tr>
             </table></td>
           </tr>
         </table>
         <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
           <tr style="border-collapse:collapse">
            <td align="center" style="padding:0;Margin:0">
             <table class="es-content-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
               <tr style="border-collapse:collapse">
                <td class="bg-img" align="left" style="Margin:0;padding-bottom:25px;padding-top:30px;padding-left:35px;padding-right:35px;background-image:url(https://i.ibb.co/9ZdKCpH/paluzbg1-bz6.png);background-repeat:no-repeat;background-position:left top;" background="https://i.ibb.co/9ZdKCpH/paluzbg1-bz6.png">
                 <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                   <tr style="border-collapse:collapse">
                    <td valign="top" align="center" style="padding:0;Margin:0;width:530px">
                     <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                       <tr style="border-collapse:collapse">
                        <td align="left" style="padding:0;Margin:0;padding-bottom:5px;padding-top:20px"><h3 style="Margin:0;line-height:22px;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;font-size:18px;font-style:normal;font-weight:bold;color:#333333">Estimado (a) ${nombre},</h3></td>
                       </tr>
                       <tr style="border-collapse:collapse">
                        <td align="left" style="padding:0;Margin:0;padding-bottom:10px;padding-top:15px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:24px;color:#777777;font-size:16px">Para nuestra organización es grato informarte que tu postulación y solicitud de ingreso como voluntario ha sido aceptada, gracias a tú interés en ser parte de nuestros voluntarios. Es un privilegio poder contar con tu apoyo para el beneficio de los que más lo necesitan.</p></td>
                       </tr>
                       <tr style="border-collapse:collapse">
                        <td align="left" style="padding:0;Margin:0;padding-top:5px;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:24px;color:#777777;font-size:16px">Es importante destacar que a partir de este momento los principios y valores de PALUZ se convierten en tuyos, imparcialidad, neutralidad, voluntariado, humanidad, bienestar y altruismo. ¡Contamos contigo!</p></td>
                       </tr>
                       <tr style="border-collapse:collapse">
                        <td align="left" style="padding:0;Margin:0;padding-top:5px;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:24px;color:#777777;font-size:16px">Todo nuevo voluntario debe cumplir con un periodo de prueba de <b>03 meses</b> (3 a 6 actividades), periodo en el cual evaluaremos tu desempeño y posterior a ese momento, la organización decidirá tu permanencia o no en el voluntariado.</p></td>
                       </tr>
                       <tr style="border-collapse:collapse">
                        <td align="left" style="padding:0;Margin:0;padding-top:5px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:24px;color:#777777;font-size:16px">En breve recibirás un correo con instrucciones para crear tu usuario y contraseña en nuestra <strong>App PALUZ</strong>, en la cual convocamos a las actividades que desarrollamos todas las semanas y podrás postularte para participar.</p></td>
                       </tr>
                       <tr style="border-collapse:collapse">
                        <td align="left" style="padding:0;Margin:0;padding-top:35px;padding-bottom:10px"><h3 style="Margin:0;line-height:22px;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;font-size:18px;font-style:normal;font-weight:bold;color:#333333">¡Te deseamos el mayor de los éxitos!</h3></td>
                       </tr>
                     </table></td>
                   </tr>
                 </table></td>
               </tr>
             </table></td>
           </tr>
         </table>
         <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
           <tr style="border-collapse:collapse">
            <td align="center" style="padding:0;Margin:0">
             <table class="es-content-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
               <tr style="border-collapse:collapse">
                <td align="left" style="padding:0;Margin:0;padding-top:15px;padding-left:35px;padding-right:35px">
                 <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                   <tr style="border-collapse:collapse">
                    <td valign="top" align="center" style="padding:0;Margin:0;width:530px">
                     <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                       <tr style="border-collapse:collapse">
                        <!-- <td align="center" style="padding:0;Margin:0;font-size:0"><img src="images/18501522065897895.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="46"></td> -->
                       </tr> 
                     </table></td>
                   </tr>
                 </table></td>
               </tr>
             </table></td>
           </tr>
         </table>
         <table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
           <tr style="border-collapse:collapse">
            <td align="center" style="padding:0;Margin:0">
             <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#008080;width:600px;border-bottom:10px solid #008080" cellspacing="0" cellpadding="0" bgcolor="#008080" align="center">
               <tr style="border-collapse:collapse">
                <td align="left" style="padding:0;Margin:0">
                 <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                   <tr style="border-collapse:collapse">
                    <td valign="top" align="center" style="padding:0;Margin:0;width:600px">
                     <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                       <tr style="border-collapse:collapse">
                        <td style="padding:0;Margin:0">
                         <table class="es-menu" width="40%" cellspacing="0" cellpadding="0" align="center" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                           <tr class="links-images-top" style="border-collapse:collapse">
                            <!--<td style="Margin:0;padding-left:5px;padding-right:5px;padding-top:35px;padding-bottom:30px;border:0" width="100%" bgcolor="transparent" align="center"><a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;color:#ffffff;font-size:20px" href="https://instagram.com/primerosauxiliosluz/"><img src="https://i.ibb.co/5vRj0Tr/igicon.png" alt="@primerosauxiliosluz" title="@primerosauxiliosluz" height="27" align="absmiddle" style="display:inline-block !important;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;padding-bottom:5px"><br>@primerosauxiliosluz</a></td> -->
                            <td style="Margin:0;padding-left:5px;padding-right:5px;padding-top:35px;padding-bottom:3px;border:0" width="100%" bgcolor="transparent" align="center"><a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;color:#ffffff;font-size:20px" href="https://instagram.com/primerosauxiliosluz/"><img src="https://i.ibb.co/Vmq6DDr/voluntarios-img.png" alt="@primerosauxiliosluz" title="@primerosauxiliosluz" height="150" width="550" align="absmiddle" style="display:inline-block !important;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;padding-bottom:5px"></a></td>
                           </tr>
                         </table></td>
                       </tr>
                       <tr style="border-collapse:collapse">
                        <td style="padding:0;Margin:0">
                         <table class="es-menu" width="40%" cellspacing="0" cellpadding="0" align="center" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                           <tr class="links-images-top" style="border-collapse:collapse">
                            <td style="Margin:0;padding-left:5px;padding-right:5px;padding-top:5px;padding-bottom:8px;border:0" width="100%" bgcolor="transparent" align="center"><a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;color:#ffffff;font-size:20px" href="https://instagram.com/primerosauxiliosluz/"><img src="https://i.ibb.co/5vRj0Tr/igicon.png" alt="@primerosauxiliosluz" title="@primerosauxiliosluz" height="27" align="absmiddle" style="display:inline-block !important;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;padding-bottom:5px"></a></td>
                            <td style="Margin:0;padding-left:5px;padding-right:5px;padding-top:3px;padding-bottom:5px;border:0" width="100%" bgcolor="transparent" align="center"><a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;color:#ffffff;font-size:20px" href="https://instagram.com/primerosauxiliosluz/"> @primerosauxiliosluz </a></td>
                          </tr>
                         </table></td>
                       </tr>
                     </table></td>
                   </tr>
                 </table></td>
               </tr>
             </table></td>
           </tr>
         </table>
         <table cellpadding="0" cellspacing="0" class="es-footer" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">
           <tr style="border-collapse:collapse">
            <td align="center" style="padding:0;Margin:0">
             <table class="es-footer-body" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
               <tr style="border-collapse:collapse">
                <td align="left" style="Margin:0;padding-top:35px;padding-left:35px;padding-right:35px;padding-bottom:40px">
                 <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                   <tr style="border-collapse:collapse">
                    <td valign="top" align="center" style="padding:0;Margin:0;width:530px">
                     <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                       <tr style="border-collapse:collapse">
                        <td align="center" style="padding:0;Margin:0;padding-bottom:15px;padding-top:10px;font-size:0px"><img src="https://i.ibb.co/kGWh0RY/icono-paluz-2.png" alt="PALUZ Logo" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" title="PALUZ Logo" width="37"></td>
                       </tr>
                       <tr style="border-collapse:collapse">
                        <td align="center" style="padding:0;Margin:0;padding-bottom:35px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:21px;color:#333333;font-size:14px"><strong> &copy; 2023 | PALUZ </strong></p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:21px;color:#333333;font-size:14px"><strong>Maracaibo, Edo. Zulia</strong></p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:21px;color:#333333;font-size:14px"><strong><a target="_blank" href="http://www.paluz.org" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#333333;font-size:14px">www.paluz.org</a></strong></p></td>
                       </tr>
                       <tr style="border-collapse:collapse">
                        <td esdev-links-color="#777777" align="left" class="es-m-txt-c" style="padding:0;Margin:0;padding-bottom:5px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:21px;color:#777777;font-size:14px">Si usted no creó una cuenta usando esta dirección de correo electrónico, por favor ignore este correo.</p></td>
                       </tr>
                     </table></td>
                   </tr>
                 </table></td>
               </tr>
             </table></td>
           </tr>
         </table></td>
       </tr>
     </table>
    </div>
   </body>
   <script>
    const paragraph = '
    <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:21px;color:#333333;font-size:14px">
      <strong>
        &copy; ${new Date().getFullYear()} - PALUZ
      </Strong>
    </p>
  ';
    document.getElementById('copyright').innerHTML = paragraph;
  </script>`,

  };
  
  //ES6
sgMail
.send(msg)
.then(() => {}, error => {
  console.error(error);

  if (error.response) {
    console.error(error.response.body)
  }
});

  





    
    console.log('si se ejecuto')
  };


  //////
  async function rechazo (datos) {
    const { email, nombre, token } = datos;
  console.log(datos,'Envio de Correosss')
    const transport = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
  
    // Información del email
  
    const info = await transport.sendMail({
      from: '"PALUZ" <soporte@paluz.org>',
      to: email,
      subject: "Admision a PALUZ",
      text: "",
      // html: `<p>Hola: ${nombre} has solicitado reestablecer tu password</p>
  
      // <p>Sigue el siguiente enlace para generar un nuevo password: 
  
      // <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Reestablecer Password</a>
      
      // <p>Si tu no solicitaste este email, puedes ignorar el mensaje</p>
      
      
      // `,
      html:` <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700,700i" rel="stylesheet"><!--<![endif]-->
      <style type="text/css">
    #outlook a {
      padding:0;
    }
    .ExternalClass {
      width:100%;
    }
    .ExternalClass,
    .ExternalClass p,
    .ExternalClass span,
    .ExternalClass font,
    .ExternalClass td,
    .ExternalClass div {
      line-height:100%;
    }
    .es-button {
      mso-style-priority:100!important;
      text-decoration:none!important;
    }
    a[x-apple-data-detectors] {
      color:inherit!important;
      text-decoration:none!important;
      font-size:inherit!important;
      font-family:inherit!important;
      font-weight:inherit!important;
      line-height:inherit!important;
    }
    .es-desk-hidden {
      display:none;
      float:left;
      overflow:hidden;
      width:0;
      max-height:0;
      line-height:0;
      mso-hide:all;
    }
    
    @media only screen and (max-width:600px) {.bg-img { background-image:none!important;} p, ul li, ol li, a { line-height:150%!important } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120%!important } h1 { font-size:32px!important; text-align:left } h2 { font-size:26px!important; text-align:left } h3 { font-size:20px!important; text-align:left } h1 a { text-align:left } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:36px!important } h2 a { text-align:left } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:30px!important } h3 a { text-align:left } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:18px!important } .es-menu td a { font-size:16px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:16px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:16px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:inline-block!important } a.es-button, button.es-button { font-size:16px!important; display:inline-block!important; padding:15px 30px 15px 30px!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; max-height:inherit!important }; }
    </style>
     </head>
     <body style="width:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;padding:0;Margin:0">
      <div class="es-wrapper-color" style="background-color:#EEEEEE"><!--[if gte mso 9]>
          <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
            <v:fill type="tile" color="#eeeeee"></v:fill>
          </v:background>
        <![endif]-->
       <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#EEEEEE">
         <tr style="border-collapse:collapse">
          <td valign="top" style="padding:0;Margin:0">
           <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
             <tr style="border-collapse:collapse"></tr>
             <tr style="border-collapse:collapse">
              <td align="center" style="padding:0;Margin:0">
               <table class="es-header-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#ffffff;width:600px" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center">
                 <tr style="border-collapse:collapse">
                  <td align="left" style="Margin:0;padding-top:35px;padding-left:35px;padding-right:35px;padding-bottom:40px">
                   <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr style="border-collapse:collapse">
                      <td valign="top" align="center" style="padding:0;Margin:0;width:530px">
                       <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                         <tr style="border-collapse:collapse">
                          <td align="center" style="padding:0;Margin:0;font-size:0px"><img class="adapt-img" src="images/paluzlogo.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="451"></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
           </table>
           <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
             <tr style="border-collapse:collapse">
              <td align="center" style="padding:0;Margin:0">
               <table class="es-content-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
                 <tr style="border-collapse:collapse">
                  <td class="bg-img" align="left" style="Margin:0;padding-bottom:25px;padding-top:35px;padding-left:35px;padding-right:35px;background-image:url(images/paluzbg1_bz6.png);background-repeat:no-repeat;background-position:left top;" background="images/paluzbg1_bz6.png">
                   <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr style="border-collapse:collapse">
                      <td valign="top" align="center" style="padding:0;Margin:0;width:530px">
                       <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                         <tr style="border-collapse:collapse">
                          <td align="left" style="padding:0;Margin:0;padding-bottom:5px;padding-top:20px"><h3 style="Margin:0;line-height:22px;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;font-size:18px;font-style:normal;font-weight:bold;color:#333333">Estimado (a) ${nombre},</h3></td>
                         </tr>
                         <tr style="border-collapse:collapse">
                          <td align="left" style="padding:0;Margin:0;padding-bottom:10px;padding-top:15px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:24px;color:#777777;font-size:16px">Para nuestra organización es grato informarte que tu postulación y solicitud de ingreso como voluntario ha sido aceptada, gracias a tú interés en ser parte de nuestros voluntarios. Es un privilegio poder contar con tu apoyo para el beneficio de los que más lo necesitan.</p></td>
                         </tr>
                         <tr style="border-collapse:collapse">
                          <td align="left" style="padding:0;Margin:0;padding-top:5px;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:24px;color:#777777;font-size:16px">Es importante destacar que a partir de este momento los principios y valores de PALUZ se convierten en tuyos, imparcialidad, neutralidad, voluntariado, humanidad, bienestar y altruismo. ¡Cóntamos contigo!</p></td>
                         </tr>
                         <tr style="border-collapse:collapse">
                          <td align="left" style="padding:0;Margin:0;padding-top:5px;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:24px;color:#777777;font-size:16px">Todo nuevo voluntario debe cumplir con un periodo de prueba de <b>03 meses</b> (3 a 6 actividades), periodo en el cual evaluaremos tu desempeño y posterior a ese momento, la organización decidirá tu permanencia o no en el voluntariado.</p></td>
                         </tr>
                         <tr style="border-collapse:collapse">
                          <td align="left" style="padding:0;Margin:0;padding-top:5px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:24px;color:#777777;font-size:16px">El próximo paso será agregarte a nuestro canal de comunicación, a través de un grupo de WhatsApp de voluntarios, en el cual convocamos a las actividades que desarrollamos todas las semanas y podrás postularte para participar.</p></td>
                         </tr>
                         <tr style="border-collapse:collapse">
                          <td align="left" style="padding:0;Margin:0;padding-top:35px;padding-bottom:15px"><h3 style="Margin:0;line-height:22px;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;font-size:18px;font-style:normal;font-weight:bold;color:#333333">¡Te deseamos el mayor de los éxitos!</h3></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
           </table>
           <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
             <tr style="border-collapse:collapse">
              <td align="center" style="padding:0;Margin:0">
               <table class="es-content-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
                 <tr style="border-collapse:collapse">
                  <td align="left" style="padding:0;Margin:0;padding-top:15px;padding-left:35px;padding-right:35px">
                   <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr style="border-collapse:collapse">
                      <td valign="top" align="center" style="padding:0;Margin:0;width:530px">
                       <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                         <tr style="border-collapse:collapse">
                          <!-- <td align="center" style="padding:0;Margin:0;font-size:0"><img src="images/18501522065897895.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="46"></td> -->
                         </tr> 
                       </table></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
           </table>
           <table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
             <tr style="border-collapse:collapse">
              <td align="center" style="padding:0;Margin:0">
               <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#008080;width:600px;border-bottom:10px solid #008080" cellspacing="0" cellpadding="0" bgcolor="#008080" align="center">
                 <tr style="border-collapse:collapse">
                  <td align="left" style="padding:0;Margin:0">
                   <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr style="border-collapse:collapse">
                      <td valign="top" align="center" style="padding:0;Margin:0;width:600px">
                       <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                         <tr style="border-collapse:collapse">
                          <td style="padding:0;Margin:0">
                           <table class="es-menu" width="40%" cellspacing="0" cellpadding="0" align="center" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                             <tr class="links-images-top" style="border-collapse:collapse">
                              <td style="Margin:0;padding-left:5px;padding-right:5px;padding-top:35px;padding-bottom:30px;border:0" width="100%" bgcolor="transparent" align="center"><a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;color:#ffffff;font-size:20px" href="https://instagram.com/primerosauxiliosluz/"><img src="images/igicon.png" alt="@primerosauxiliosluz" title="@primerosauxiliosluz" height="27" align="absmiddle" style="display:inline-block !important;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;padding-bottom:5px"><br>@primerosauxiliosluz</a></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
           </table>
           <table cellpadding="0" cellspacing="0" class="es-footer" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">
             <tr style="border-collapse:collapse">
              <td align="center" style="padding:0;Margin:0">
               <table class="es-footer-body" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
                 <tr style="border-collapse:collapse">
                  <td align="left" style="Margin:0;padding-top:35px;padding-left:35px;padding-right:35px;padding-bottom:40px">
                   <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr style="border-collapse:collapse">
                      <td valign="top" align="center" style="padding:0;Margin:0;width:530px">
                       <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                         <tr style="border-collapse:collapse">
                          <td align="center" style="padding:0;Margin:0;padding-bottom:15px;padding-top:10px;font-size:0px"><img src="images/icono_paluz_2.png" alt="PALUZ Logo" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" title="PALUZ Logo" width="37"></td>
                         </tr>
                         <tr style="border-collapse:collapse">
                          <td align="center" style="padding:0;Margin:0;padding-bottom:35px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:21px;color:#333333;font-size:14px" id="copyright"></p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:21px;color:#333333;font-size:14px"><strong>Maracaibo, Edo. Zulia</strong></p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:21px;color:#333333;font-size:14px"><strong><a target="_blank" href="http://www.paluz.org" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#333333;font-size:14px">www.paluz.org</a></strong></p></td>
                         </tr>
                         <tr style="border-collapse:collapse">
                          <td esdev-links-color="#777777" align="left" class="es-m-txt-c" style="padding:0;Margin:0;padding-bottom:5px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:21px;color:#777777;font-size:14px">Si usted no creó una cuenta usando esta dirección de correo electrónico, por favor ignore este correo.</p></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
           </table></td>
         </tr>
       </table>
      </div>
     </body>
     <script>
      const paragraph = '
      <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:21px;color:#333333;font-size:14px">
        <strong>
          &copy; ${new Date().getFullYear()} - PALUZ
        </Strong>
      </p>
    '
      document.getElementById('copyright').innerHTML = paragraph;
    </script>`
    });
  };

   //////
   async function asignarContraseña (datos) {
    const { email, nombre, token } = datos;


    const msg = {
      to: email,
      from: 'jpirela@paluz.org', // Use the email address or domain you verified above
      subject: "Cuenta PALUZ Activada",
      text: 'prueba',
      html:`<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700,700i" rel="stylesheet"><!--<![endif]-->
      <style type="text/css">
    #outlook a {
      padding:0;
    }
    .ExternalClass {
      width:100%;
    }
    .ExternalClass,
    .ExternalClass p,
    .ExternalClass span,
    .ExternalClass font,
    .ExternalClass td,
    .ExternalClass div {
      line-height:100%;
    }
    .es-button {
      mso-style-priority:100!important;
      text-decoration:none!important;
    }
    a[x-apple-data-detectors] {
      color:inherit!important;
      text-decoration:none!important;
      font-size:inherit!important;
      font-family:inherit!important;
      font-weight:inherit!important;
      line-height:inherit!important;
    }
    .es-desk-hidden {
      display:none;
      float:left;
      overflow:hidden;
      width:0;
      max-height:0;
      line-height:0;
      mso-hide:all;
    }
    
    @media only screen and (max-width:600px) {.bg-img { background-image:none!important;} p, ul li, ol li, a { line-height:150%!important } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120%!important } h1 { font-size:32px!important; text-align:left } h2 { font-size:26px!important; text-align:left } h3 { font-size:20px!important; text-align:left } h1 a { text-align:left } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:36px!important } h2 a { text-align:left } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:30px!important } h3 a { text-align:left } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:18px!important } .es-menu td a { font-size:16px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:16px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:16px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:inline-block!important } a.es-button, button.es-button { font-size:16px!important; display:inline-block!important; padding:15px 30px 15px 30px!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; max-height:inherit!important }; }
    </style>
     </head>
     <body style="width:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;padding:0;Margin:0">
      <div class="es-wrapper-color" style="background-color:#EEEEEE"><!--[if gte mso 9]>
          <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
            <v:fill type="tile" color="#eeeeee"></v:fill>
          </v:background>
        <![endif]-->
       <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#EEEEEE">
         <tr style="border-collapse:collapse">
          <td valign="top" style="padding:0;Margin:0">
           <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
             <tr style="border-collapse:collapse"></tr>
             <tr style="border-collapse:collapse">
              <td align="center" style="padding:0;Margin:0">
               <table class="es-header-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#ffffff;width:600px" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center">
                 <tr style="border-collapse:collapse">
                  <td align="left" style="Margin:0;padding-top:35px;padding-left:35px;padding-right:35px;padding-bottom:40px">
                   <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr style="border-collapse:collapse">
                      <td valign="top" align="center" style="padding:0;Margin:0;width:530px">
                       <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                         <tr style="border-collapse:collapse">
                          <td align="center" style="padding:0;Margin:0;font-size:0px"><img class="adapt-img" src="https://i.ibb.co/ZL8Pdc8/paluzlogo.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="451"></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
           </table>
           <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
             <tr style="border-collapse:collapse">
              <td align="center" style="padding:0;Margin:0">
               <table class="es-content-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
                 <tr style="border-collapse:collapse">
                  <td class="bg-img" align="left" style="Margin:0;padding-bottom:25px;padding-top:35px;padding-left:35px;padding-right:35px;background-image:url(images/paluzbg1_bz6.png);background-repeat:no-repeat;background-position:left top;" background="images/paluzbg1_bz6.png">
                   <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr style="border-collapse:collapse">
                      <td valign="top" align="center" style="padding:0;Margin:0;width:530px">
                       <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                         <tr style="border-collapse:collapse">
                          <td align="left" style="padding:0;Margin:0;padding-bottom:5px;padding-top:40px"><h3 style="Margin:0;line-height:22px;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;font-size:18px;font-style:normal;font-weight:bold;color:#333333">Estimado (a) ${nombre},</h3></td>
                         </tr>
                         <tr style="border-collapse:collapse">
                          <td align="left" style="padding:0;Margin:0;padding-bottom:20px;padding-top:35px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:24px;color:#777777;font-size:16px">Nos complace informarte que tu cuenta de usuario para nuestra <strong>App PALUZ</strong> ha sido activada.</p></td>
                         </tr>
                         <tr style="border-collapse:collapse">
                          <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-bottom:30px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:24px;color:#777777;font-size:16px">El siguiente paso será que crees una nueva contraseña para tu cuenta, puedes hacerlo <strong> <a href="https://zesty-druid-3b009a.netlify.app/createPass?token=${token}">aquí.</a> </strong></p></td>
                         </tr>
                         <tr style="border-collapse:collapse">
                          <td align="left" style="padding:0;Margin:0;padding-top:35px;padding-bottom:10px"><h3 style="Margin:0;line-height:22px;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;font-size:18px;font-style:normal;font-weight:bold;color:#333333">¡Te esperamos!</h3></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
           </table>
           <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
             <tr style="border-collapse:collapse">
              <td align="center" style="padding:0;Margin:0">
               <table class="es-content-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
                 <tr style="border-collapse:collapse">
                  <td align="left" style="padding:0;Margin:0;padding-top:15px;padding-left:35px;padding-right:35px">
                   <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr style="border-collapse:collapse">
                      <td valign="top" align="center" style="padding:0;Margin:0;width:530px">
                       <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                         <tr style="border-collapse:collapse">
                          <!-- <td align="center" style="padding:0;Margin:0;font-size:0"><img src="images/18501522065897895.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="46"></td> -->
                         </tr> 
                       </table></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
           </table>
           <table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
         <tr style="border-collapse:collapse">
          <td align="center" style="padding:0;Margin:0">
           <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#008080;width:600px;border-bottom:10px solid #008080" cellspacing="0" cellpadding="0" bgcolor="#008080" align="center">
             <tr style="border-collapse:collapse">
              <td align="left" style="padding:0;Margin:0">
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                 <tr style="border-collapse:collapse">
                  <td valign="top" align="center" style="padding:0;Margin:0;width:600px">
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr style="border-collapse:collapse">
                      <td style="padding:0;Margin:0">
                       <table class="es-menu" width="40%" cellspacing="0" cellpadding="0" align="center" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                         <tr class="links-images-top" style="border-collapse:collapse">
                          <!--<td style="Margin:0;padding-left:5px;padding-right:5px;padding-top:35px;padding-bottom:30px;border:0" width="100%" bgcolor="transparent" align="center"><a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;color:#ffffff;font-size:20px" href="https://instagram.com/primerosauxiliosluz/"><img src="https://i.ibb.co/5vRj0Tr/igicon.png" alt="@primerosauxiliosluz" title="@primerosauxiliosluz" height="27" align="absmiddle" style="display:inline-block !important;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;padding-bottom:5px"><br>@primerosauxiliosluz</a></td> -->
                          <td style="Margin:0;padding-left:5px;padding-right:5px;padding-top:35px;padding-bottom:3px;border:0" width="100%" bgcolor="transparent" align="center"><a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;color:#ffffff;font-size:20px" href="https://instagram.com/primerosauxiliosluz/"><img src="https://i.ibb.co/Vmq6DDr/voluntarios-img.png" alt="@primerosauxiliosluz" title="@primerosauxiliosluz" height="150" width="550" align="absmiddle" style="display:inline-block !important;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;padding-bottom:5px"></a></td>
                         </tr>
                       </table></td>
                     </tr>
                     <tr style="border-collapse:collapse">
                      <td style="padding:0;Margin:0">
                       <table class="es-menu" width="40%" cellspacing="0" cellpadding="0" align="center" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                         <tr class="links-images-top" style="border-collapse:collapse">
                          <td style="Margin:0;padding-left:5px;padding-right:5px;padding-top:5px;padding-bottom:8px;border:0" width="100%" bgcolor="transparent" align="center"><a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;color:#ffffff;font-size:20px" href="https://instagram.com/primerosauxiliosluz/"><img src="https://i.ibb.co/5vRj0Tr/igicon.png" alt="@primerosauxiliosluz" title="@primerosauxiliosluz" height="27" align="absmiddle" style="display:inline-block !important;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;padding-bottom:5px"></a></td>
                          <td style="Margin:0;padding-left:5px;padding-right:5px;padding-top:3px;padding-bottom:5px;border:0" width="100%" bgcolor="transparent" align="center"><a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;color:#ffffff;font-size:20px" href="https://instagram.com/primerosauxiliosluz/"> @primerosauxiliosluz </a></td>
                        </tr>
                       </table></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
           </table></td>
         </tr>
       </table>
           <table cellpadding="0" cellspacing="0" class="es-footer" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">
             <tr style="border-collapse:collapse">
              <td align="center" style="padding:0;Margin:0">
               <table class="es-footer-body" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
                 <tr style="border-collapse:collapse">
                  <td align="left" style="Margin:0;padding-top:35px;padding-left:35px;padding-right:35px;padding-bottom:40px">
                   <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr style="border-collapse:collapse">
                      <td valign="top" align="center" style="padding:0;Margin:0;width:530px">
                       <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                         <tr style="border-collapse:collapse">
                          <td align="center" style="padding:0;Margin:0;padding-bottom:15px;padding-top:10px;font-size:0px"><img src="images/icono_paluz_2.png" alt="PALUZ Logo" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" title="PALUZ Logo" width="37"></td>
                         </tr>
                         <tr style="border-collapse:collapse">
                          <td align="center" style="padding:0;Margin:0;padding-bottom:35px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:21px;color:#333333;font-size:14px" id="copyright"></p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:21px;color:#333333;font-size:14px"><strong>Maracaibo, Edo. Zulia</strong></p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:21px;color:#333333;font-size:14px"><strong><a target="_blank" href="http://www.paluz.org" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#333333;font-size:14px">www.paluz.org</a></strong></p></td>
                         </tr>
                         <tr style="border-collapse:collapse">
                          <td esdev-links-color="#777777" align="left" class="es-m-txt-c" style="padding:0;Margin:0;padding-bottom:5px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:21px;color:#777777;font-size:14px">Si usted no creó una cuenta usando esta dirección de correo electrónico, por favor ignore este correo.</p></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
           </table></td>
         </tr>
       </table>
      </div>
     </body>
     <script>
      const paragraph = '
      <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:21px;color:#333333;font-size:14px">
        <strong>
          &copy; ${new Date().getFullYear()} - PALUZ
        </Strong>
      </p>
    ';
      document.getElementById('copyright').innerHTML = paragraph;
    </script>`,
    }

  //ES6
  sgMail
  .send(msg)
  .then(() => {}, error => {
    console.error(error);
  
    if (error.response) {
      console.error(error.response.body)
    }
  });

  // console.log(datos,'Envio de Correosss')
  //   const transport = nodemailer.createTransport({
  //     host: process.env.EMAIL_HOST,
  //     port: process.env.EMAIL_PORT,
  //     auth: {
  //       user: process.env.EMAIL_USER,
  //       pass: process.env.EMAIL_PASS,
  //     },
  //   });
  
    // Información del email
  
    // const info = await transport.sendMail({
    //   from: '"PALUZ" <soporte@paluz.org>',
    //   to: email,
    //   subject: "Admision a PALUZ",
    //   text: "",
    //   // html: `<p>Hola: ${nombre} has solicitado reestablecer tu password</p>
  
    //   // <p>Sigue el siguiente enlace para generar un nuevo password: 
  
    //   // <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Reestablecer Password</a>
      
    //   // <p>Si tu no solicitaste este email, puedes ignorar el mensaje</p>
      
      
    //   // `,
    //   html:`<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700,700i" rel="stylesheet"><!--<![endif]-->
    //   <style type="text/css">
    // #outlook a {
    //   padding:0;
    // }
    // .ExternalClass {
    //   width:100%;
    // }
    // .ExternalClass,
    // .ExternalClass p,
    // .ExternalClass span,
    // .ExternalClass font,
    // .ExternalClass td,
    // .ExternalClass div {
    //   line-height:100%;
    // }
    // .es-button {
    //   mso-style-priority:100!important;
    //   text-decoration:none!important;
    // }
    // a[x-apple-data-detectors] {
    //   color:inherit!important;
    //   text-decoration:none!important;
    //   font-size:inherit!important;
    //   font-family:inherit!important;
    //   font-weight:inherit!important;
    //   line-height:inherit!important;
    // }
    // .es-desk-hidden {
    //   display:none;
    //   float:left;
    //   overflow:hidden;
    //   width:0;
    //   max-height:0;
    //   line-height:0;
    //   mso-hide:all;
    // }
    
    // @media only screen and (max-width:600px) {.bg-img { background-image:none!important;} p, ul li, ol li, a { line-height:150%!important } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120%!important } h1 { font-size:32px!important; text-align:left } h2 { font-size:26px!important; text-align:left } h3 { font-size:20px!important; text-align:left } h1 a { text-align:left } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:36px!important } h2 a { text-align:left } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:30px!important } h3 a { text-align:left } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:18px!important } .es-menu td a { font-size:16px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:16px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:16px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:inline-block!important } a.es-button, button.es-button { font-size:16px!important; display:inline-block!important; padding:15px 30px 15px 30px!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; max-height:inherit!important }; }
    // </style>
    //  </head>
    //  <body style="width:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;padding:0;Margin:0">
    //   <div class="es-wrapper-color" style="background-color:#EEEEEE"><!--[if gte mso 9]>
    //       <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
    //         <v:fill type="tile" color="#eeeeee"></v:fill>
    //       </v:background>
    //     <![endif]-->
    //    <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#EEEEEE">
    //      <tr style="border-collapse:collapse">
    //       <td valign="top" style="padding:0;Margin:0">
    //        <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
    //          <tr style="border-collapse:collapse"></tr>
    //          <tr style="border-collapse:collapse">
    //           <td align="center" style="padding:0;Margin:0">
    //            <table class="es-header-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#ffffff;width:600px" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center">
    //              <tr style="border-collapse:collapse">
    //               <td align="left" style="Margin:0;padding-top:35px;padding-left:35px;padding-right:35px;padding-bottom:40px">
    //                <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
    //                  <tr style="border-collapse:collapse">
    //                   <td valign="top" align="center" style="padding:0;Margin:0;width:530px">
    //                    <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
    //                      <tr style="border-collapse:collapse">
    //                       <td align="center" style="padding:0;Margin:0;font-size:0px"><img class="adapt-img" src="https://i.ibb.co/ZL8Pdc8/paluzlogo.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="451"></td>
    //                      </tr>
    //                    </table></td>
    //                  </tr>
    //                </table></td>
    //              </tr>
    //            </table></td>
    //          </tr>
    //        </table>
    //        <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
    //          <tr style="border-collapse:collapse">
    //           <td align="center" style="padding:0;Margin:0">
    //            <table class="es-content-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
    //              <tr style="border-collapse:collapse">
    //               <td class="bg-img" align="left" style="Margin:0;padding-bottom:25px;padding-top:35px;padding-left:35px;padding-right:35px;background-image:url(images/paluzbg1_bz6.png);background-repeat:no-repeat;background-position:left top;" background="images/paluzbg1_bz6.png">
    //                <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
    //                  <tr style="border-collapse:collapse">
    //                   <td valign="top" align="center" style="padding:0;Margin:0;width:530px">
    //                    <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
    //                      <tr style="border-collapse:collapse">
    //                       <td align="left" style="padding:0;Margin:0;padding-bottom:5px;padding-top:40px"><h3 style="Margin:0;line-height:22px;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;font-size:18px;font-style:normal;font-weight:bold;color:#333333">Estimado (a) ${nombre},</h3></td>
    //                      </tr>
    //                      <tr style="border-collapse:collapse">
    //                       <td align="left" style="padding:0;Margin:0;padding-bottom:20px;padding-top:35px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:24px;color:#777777;font-size:16px">Nos complace informarte que tu cuenta de usuario para nuestra <strong>App PALUZ</strong> ha sido activada.</p></td>
    //                      </tr>
    //                      <tr style="border-collapse:collapse">
    //                       <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-bottom:30px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:24px;color:#777777;font-size:16px">El siguiente paso será que crees una nueva contraseña para tu cuenta, puedes hacerlo <strong> <a href="https://zesty-druid-3b009a.netlify.app/createPass?token=${token}">aquí.</a> </strong></p></td>
    //                      </tr>
    //                      <tr style="border-collapse:collapse">
    //                       <td align="left" style="padding:0;Margin:0;padding-top:35px;padding-bottom:10px"><h3 style="Margin:0;line-height:22px;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;font-size:18px;font-style:normal;font-weight:bold;color:#333333">¡Te esperamos!</h3></td>
    //                      </tr>
    //                    </table></td>
    //                  </tr>
    //                </table></td>
    //              </tr>
    //            </table></td>
    //          </tr>
    //        </table>
    //        <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
    //          <tr style="border-collapse:collapse">
    //           <td align="center" style="padding:0;Margin:0">
    //            <table class="es-content-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
    //              <tr style="border-collapse:collapse">
    //               <td align="left" style="padding:0;Margin:0;padding-top:15px;padding-left:35px;padding-right:35px">
    //                <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
    //                  <tr style="border-collapse:collapse">
    //                   <td valign="top" align="center" style="padding:0;Margin:0;width:530px">
    //                    <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
    //                      <tr style="border-collapse:collapse">
    //                       <!-- <td align="center" style="padding:0;Margin:0;font-size:0"><img src="images/18501522065897895.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="46"></td> -->
    //                      </tr> 
    //                    </table></td>
    //                  </tr>
    //                </table></td>
    //              </tr>
    //            </table></td>
    //          </tr>
    //        </table>
    //        <table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
    //          <tr style="border-collapse:collapse">
    //           <td align="center" style="padding:0;Margin:0">
    //            <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#008080;width:600px;border-bottom:10px solid #008080" cellspacing="0" cellpadding="0" bgcolor="#008080" align="center">
    //              <tr style="border-collapse:collapse">
    //               <td align="left" style="padding:0;Margin:0">
    //                <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
    //                  <tr style="border-collapse:collapse">
    //                   <td valign="top" align="center" style="padding:0;Margin:0;width:600px">
    //                    <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
    //                      <tr style="border-collapse:collapse">
    //                       <td style="padding:0;Margin:0">
    //                        <table class="es-menu" width="40%" cellspacing="0" cellpadding="0" align="center" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
    //                          <tr class="links-images-top" style="border-collapse:collapse">
    //                           <td style="Margin:0;padding-left:5px;padding-right:5px;padding-top:35px;padding-bottom:30px;border:0" width="100%" bgcolor="transparent" align="center"><a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;color:#ffffff;font-size:20px" href="https://instagram.com/primerosauxiliosluz/"><img src="images/igicon.png" alt="@primerosauxiliosluz" title="@primerosauxiliosluz" height="27" align="absmiddle" style="display:inline-block !important;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;padding-bottom:5px"><br>@primerosauxiliosluz</a></td>
    //                          </tr>
    //                        </table></td>
    //                      </tr>
    //                    </table></td>
    //                  </tr>
    //                </table></td>
    //              </tr>
    //            </table></td>
    //          </tr>
    //        </table>
    //        <table cellpadding="0" cellspacing="0" class="es-footer" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">
    //          <tr style="border-collapse:collapse">
    //           <td align="center" style="padding:0;Margin:0">
    //            <table class="es-footer-body" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
    //              <tr style="border-collapse:collapse">
    //               <td align="left" style="Margin:0;padding-top:35px;padding-left:35px;padding-right:35px;padding-bottom:40px">
    //                <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
    //                  <tr style="border-collapse:collapse">
    //                   <td valign="top" align="center" style="padding:0;Margin:0;width:530px">
    //                    <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
    //                      <tr style="border-collapse:collapse">
    //                       <td align="center" style="padding:0;Margin:0;padding-bottom:15px;padding-top:10px;font-size:0px"><img src="images/icono_paluz_2.png" alt="PALUZ Logo" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" title="PALUZ Logo" width="37"></td>
    //                      </tr>
    //                      <tr style="border-collapse:collapse">
    //                       <td align="center" style="padding:0;Margin:0;padding-bottom:35px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:21px;color:#333333;font-size:14px" id="copyright"></p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:21px;color:#333333;font-size:14px"><strong>Maracaibo, Edo. Zulia</strong></p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:21px;color:#333333;font-size:14px"><strong><a target="_blank" href="http://www.paluz.org" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#333333;font-size:14px">www.paluz.org</a></strong></p></td>
    //                      </tr>
    //                      <tr style="border-collapse:collapse">
    //                       <td esdev-links-color="#777777" align="left" class="es-m-txt-c" style="padding:0;Margin:0;padding-bottom:5px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:21px;color:#777777;font-size:14px">Si usted no creó una cuenta usando esta dirección de correo electrónico, por favor ignore este correo.</p></td>
    //                      </tr>
    //                    </table></td>
    //                  </tr>
    //                </table></td>
    //              </tr>
    //            </table></td>
    //          </tr>
    //        </table></td>
    //      </tr>
    //    </table>
    //   </div>
    //  </body>
    //  <script>
    //   const paragraph = '
    //   <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:21px;color:#333333;font-size:14px">
    //     <strong>
    //       &copy; ${new Date().getFullYear()} - PALUZ
    //     </Strong>
    //   </p>
    // ';
    //   document.getElementById('copyright').innerHTML = paragraph;
    // </script>`
    // });
  };

  async function convocatoria (datos) {
    
  
   console.log(datos);

         
      const data1 = await sequelize.query(
        `
        SELECT email,nombres 
        FROM usuarios  where ocupacion in (${datos.profesiones}) or equipo in (${datos.equipos});
        `,
        {
            replacements: {},
            type: QueryTypes.SELECT
        }
    );
    const data2 = await sequelize.query(
      `
      SELECT nombre 
      FROM proyectos  where idproyectos = ${datos.idProyecto}
      `,
      {
          replacements: {},
          type: QueryTypes.SELECT
      }
  );
    console.log(data2[0].nombre,"datos")
   
    
 

    for(let i=0;i < data1.length; i++){
      console.log(data1[i].email,'paso')
      let email=data1[i].email
      const msg = {
        to: email,
        from: 'jpirela@paluz.org',
        subject: "Nueva Convocatoria Programada",
        text: 'prueba',
        html:`<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700,700i" rel="stylesheet"><!--<![endif]-->
        <style type="text/css">
      #outlook a {
        padding:0;
      }
      .ExternalClass {
        width:100%;
      }
      .ExternalClass,
      .ExternalClass p,
      .ExternalClass span,
      .ExternalClass font,
      .ExternalClass td,
      .ExternalClass div {
        line-height:100%;
      }
      .es-button {
        mso-style-priority:100!important;
        text-decoration:none!important;
      }
      a[x-apple-data-detectors] {
        color:inherit!important;
        text-decoration:none!important;
        font-size:inherit!important;
        font-family:inherit!important;
        font-weight:inherit!important;
        line-height:inherit!important;
      }
      .es-desk-hidden {
        display:none;
        float:left;
        overflow:hidden;
        width:0;
        max-height:0;
        line-height:0;
        mso-hide:all;
      }
      
      @media only screen and (max-width:600px) {.bg-img { background-image:none!important;} p, ul li, ol li, a { line-height:150%!important } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120%!important } h1 { font-size:32px!important; text-align:left } h2 { font-size:26px!important; text-align:left } h3 { font-size:20px!important; text-align:left } h1 a { text-align:left } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:36px!important } h2 a { text-align:left } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:30px!important } h3 a { text-align:left } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:18px!important } .es-menu td a { font-size:16px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:16px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:16px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:inline-block!important } a.es-button, button.es-button { font-size:16px!important; display:inline-block!important; padding:15px 30px 15px 30px!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; max-height:inherit!important }; }
      </style>
       </head>
       <body style="width:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;padding:0;Margin:0">
        <div class="es-wrapper-color" style="background-color:#EEEEEE"><!--[if gte mso 9]>
            <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
              <v:fill type="tile" color="#eeeeee"></v:fill>
            </v:background>
          <![endif]-->
         <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#EEEEEE">
           <tr style="border-collapse:collapse">
            <td valign="top" style="padding:0;Margin:0">
             <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
               <tr style="border-collapse:collapse"></tr>
               <tr style="border-collapse:collapse">
                <td align="center" style="padding:0;Margin:0">
                 <table class="es-header-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#ffffff;width:600px" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center">
                   <tr style="border-collapse:collapse">
                    <td align="left" style="Margin:0;padding-top:35px;padding-left:35px;padding-right:35px;padding-bottom:40px">
                     <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                       <tr style="border-collapse:collapse">
                        <td valign="top" align="center" style="padding:0;Margin:0;width:530px">
                         <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                           <tr style="border-collapse:collapse">
                            <td align="center" style="padding:0;Margin:0;font-size:0px"><img class="adapt-img" src="https://i.ibb.co/ZL8Pdc8/paluzlogo.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="400"></td>
                           </tr>
                         </table></td>
                       </tr>
                     </table></td>
                   </tr>
                 </table></td>
               </tr>
             </table>
             <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
               <tr style="border-collapse:collapse">
                <td align="center" style="padding:0;Margin:0">
                 <table class="es-content-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
                   <tr style="border-collapse:collapse">
                    <td class="bg-img" align="left" style="Margin:0;padding-bottom:25px;padding-top:30px;padding-left:35px;padding-right:35px;background-image:url(https://i.ibb.co/9ZdKCpH/paluzbg1-bz6.png);background-repeat:no-repeat;background-position:left top;" background="https://i.ibb.co/9ZdKCpH/paluzbg1-bz6.png">
                     <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                       <tr style="border-collapse:collapse">
                        <td valign="top" align="center" style="padding:0;Margin:0;width:530px">
                         <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                           <tr style="border-collapse:collapse">
                            <td align="left" style="padding:0;Margin:0;padding-bottom:5px;padding-top:20px"><h3 style="Margin:0;line-height:22px;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;font-size:18px;font-style:normal;font-weight:bold;color:#333333">Estimado (a) ${data1[i].nombres},</h3></td>
                           </tr>
                           <tr style="border-collapse:collapse">
                            <td align="left" style="padding:0;Margin:0;padding-bottom:10px;padding-top:15px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:24px;color:#777777;font-size:16px">Te informamos que una nueva jornada correspondiente a <b>${data2[0].nombre}</b> ha sido programada.</p></td>
                           </tr>
                           <tr style="border-collapse:collapse">
                            <td align="left" style="padding:0;Margin:0;padding-top:5px;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:24px;color:#777777;font-size:16px"><b>Tipo de Actividad: </b> ${datos.actividad} </p></td>
                           </tr>
                           <tr style="border-collapse:collapse">
                            <td align="left" style="padding:0;Margin:0;padding-top:5px;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:24px;color:#777777;font-size:16px"><b>Locación: </b> ${datos.locacion} </p></td>
                           </tr>
                           <tr style="border-collapse:collapse">
                              <td align="left" style="padding:0;Margin:0;padding-top:5px;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:24px;color:#777777;font-size:16px"><b>Punto de Encuentro: </b> ${datos.puntoEncuentro} </p></td>
                          </tr>
                          <tr style="border-collapse:collapse">
                              <td align="left" style="padding:0;Margin:0;padding-top:5px;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:24px;color:#777777;font-size:16px"><b>Hora de encuentro: </b> ${datos.horaEncuentro} </p></td>
                          </tr>
                          <tr style="border-collapse:collapse">
                              <td align="left" style="padding:0;Margin:0;padding-top:5px;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:24px;color:#777777;font-size:16px"><b>Hora de Salida: </b> ${datos.horaSalida} </p></td>
                          </tr>
                          <tr style="border-collapse:collapse">
                              <td align="left" style="padding:0;Margin:0;padding-top:5px;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:24px;color:#777777;font-size:16px"><b>Hora Aproximada de Retorno: </b> ${datos.horaRetorno} </p></td>
                          </tr>
                           <tr style="border-collapse:collapse">
                            <td align="left" style="padding:0;Margin:0;padding-top:15px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:24px;color:#777777;font-size:16px">Puedes confirmar tu asistencia <a href="#"><b>aquí</b></a>.</p></td>
                           </tr>
                           <tr style="border-collapse:collapse">
                            <td align="left" style="padding:0;Margin:0;padding-top:35px;padding-bottom:10px"><h3 style="Margin:0;line-height:22px;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;font-size:18px;font-style:normal;font-weight:bold;color:#333333">¡Te esperamos!</h3></td>
                           </tr>
                         </table></td>
                       </tr>
                     </table></td>
                   </tr>
                 </table></td>
               </tr>
             </table>
             <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
               <tr style="border-collapse:collapse">
                <td align="center" style="padding:0;Margin:0">
                 <table class="es-content-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
                   <tr style="border-collapse:collapse">
                    <td align="left" style="padding:0;Margin:0;padding-top:15px;padding-left:35px;padding-right:35px">
                     <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                       <tr style="border-collapse:collapse">
                        <td valign="top" align="center" style="padding:0;Margin:0;width:530px">
                         <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                           <tr style="border-collapse:collapse">
                            <!-- <td align="center" style="padding:0;Margin:0;font-size:0"><img src="images/18501522065897895.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="46"></td> -->
                           </tr> 
                         </table></td>
                       </tr>
                     </table></td>
                   </tr>
                 </table></td>
               </tr>
             </table>
             <table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
               <tr style="border-collapse:collapse">
                <td align="center" style="padding:0;Margin:0">
                 <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#008080;width:600px;border-bottom:10px solid #008080" cellspacing="0" cellpadding="0" bgcolor="#008080" align="center">
                   <tr style="border-collapse:collapse">
                    <td align="left" style="padding:0;Margin:0">
                     <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                       <tr style="border-collapse:collapse">
                        <td valign="top" align="center" style="padding:0;Margin:0;width:600px">
                         <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                           <tr style="border-collapse:collapse">
                            <td style="padding:0;Margin:0">
                             <table class="es-menu" width="40%" cellspacing="0" cellpadding="0" align="center" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                               <tr class="links-images-top" style="border-collapse:collapse">
                                <!--<td style="Margin:0;padding-left:5px;padding-right:5px;padding-top:35px;padding-bottom:30px;border:0" width="100%" bgcolor="transparent" align="center"><a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;color:#ffffff;font-size:20px" href="https://instagram.com/primerosauxiliosluz/"><img src="https://i.ibb.co/5vRj0Tr/igicon.png" alt="@primerosauxiliosluz" title="@primerosauxiliosluz" height="27" align="absmiddle" style="display:inline-block !important;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;padding-bottom:5px"><br>@primerosauxiliosluz</a></td> -->
                                <td style="Margin:0;padding-left:5px;padding-right:5px;padding-top:35px;padding-bottom:3px;border:0" width="100%" bgcolor="transparent" align="center"><a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;color:#ffffff;font-size:20px" href="https://instagram.com/primerosauxiliosluz/"><img src="https://i.ibb.co/Vmq6DDr/voluntarios-img.png" alt="@primerosauxiliosluz" title="@primerosauxiliosluz" height="150" width="550" align="absmiddle" style="display:inline-block !important;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;padding-bottom:5px"></a></td>
                               </tr>
                             </table></td>
                           </tr>
                           <tr style="border-collapse:collapse">
                            <td style="padding:0;Margin:0">
                             <table class="es-menu" width="40%" cellspacing="0" cellpadding="0" align="center" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                               <tr class="links-images-top" style="border-collapse:collapse">
                                <td style="Margin:0;padding-left:5px;padding-right:5px;padding-top:5px;padding-bottom:8px;border:0" width="100%" bgcolor="transparent" align="center"><a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;color:#ffffff;font-size:20px" href="https://instagram.com/primerosauxiliosluz/"><img src="https://i.ibb.co/5vRj0Tr/igicon.png" alt="@primerosauxiliosluz" title="@primerosauxiliosluz" height="27" align="absmiddle" style="display:inline-block !important;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;padding-bottom:5px"></a></td>
                                <td style="Margin:0;padding-left:5px;padding-right:5px;padding-top:3px;padding-bottom:5px;border:0" width="100%" bgcolor="transparent" align="center"><a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;color:#ffffff;font-size:20px" href="https://instagram.com/primerosauxiliosluz/"> @primerosauxiliosluz </a></td>
                              </tr>
                             </table></td>
                           </tr>
                         </table></td>
                       </tr>
                     </table></td>
                   </tr>
                 </table></td>
               </tr>
             </table>
             <table cellpadding="0" cellspacing="0" class="es-footer" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">
               <tr style="border-collapse:collapse">
                <td align="center" style="padding:0;Margin:0">
                 <table class="es-footer-body" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
                   <tr style="border-collapse:collapse">
                    <td align="left" style="Margin:0;padding-top:35px;padding-left:35px;padding-right:35px;padding-bottom:40px">
                     <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                       <tr style="border-collapse:collapse">
                        <td valign="top" align="center" style="padding:0;Margin:0;width:530px">
                         <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                           <tr style="border-collapse:collapse">
                            <td align="center" style="padding:0;Margin:0;padding-bottom:15px;padding-top:10px;font-size:0px"><img src="https://i.ibb.co/kGWh0RY/icono-paluz-2.png" alt="PALUZ Logo" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" title="PALUZ Logo" width="37"></td>
                           </tr>
                           <tr style="border-collapse:collapse">
                            <td align="center" style="padding:0;Margin:0;padding-bottom:35px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:21px;color:#333333;font-size:14px"><strong> &copy; 2023 | PALUZ </strong></p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:21px;color:#333333;font-size:14px"><strong>Maracaibo, Edo. Zulia</strong></p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:21px;color:#333333;font-size:14px"><strong><a target="_blank" href="http://www.paluz.org" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#333333;font-size:14px">www.paluz.org</a></strong></p></td>
                           </tr>
                           <tr style="border-collapse:collapse">
                            <td esdev-links-color="#777777" align="left" class="es-m-txt-c" style="padding:0;Margin:0;padding-bottom:5px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:21px;color:#777777;font-size:14px">Si usted no creó una cuenta usando esta dirección de correo electrónico, por favor ignore este correo.</p></td>
                           </tr>
                         </table></td>
                       </tr>
                     </table></td>
                   </tr>
                 </table></td>
               </tr>
             </table></td>
           </tr>
         </table>
        </div>
       </body>
       <script>
        const paragraph = '
        <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:21px;color:#333333;font-size:14px">
          <strong>
            &copy; ${new Date().getFullYear()} - PALUZ
          </Strong>
        </p>
      ';
        document.getElementById('copyright').innerHTML = paragraph;
      </script>`,
      }
  
      //ES6
  sgMail
  .send(msg)
  .then(() => {}, error => {
    console.error(error);
  
    if (error.response) {
      console.error(error.response.body)
    }
  });
      
}
      
    
    
     
  
    
  };
  async function enviarCorreoRegistro(datos) {
    const { email, nombre, token } = datos;


    const msg = {
      to: email,
      from: 'jpirela@paluz.org', // Use the email address or domain you verified above
      subject:  "Admision a PALUZ",
      text: 'prueba',
      html:` <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700,700i" rel="stylesheet"><!--<![endif]-->
      <style type="text/css">
    #outlook a {
      padding:0;
    }
    .ExternalClass {
      width:100%;
    }
    .ExternalClass,
    .ExternalClass p,
    .ExternalClass span,
    .ExternalClass font,
    .ExternalClass td,
    .ExternalClass div {
      line-height:100%;
    }
    .es-button {
      mso-style-priority:100!important;
      text-decoration:none!important;
    }
    a[x-apple-data-detectors] {
      color:inherit!important;
      text-decoration:none!important;
      font-size:inherit!important;
      font-family:inherit!important;
      font-weight:inherit!important;
      line-height:inherit!important;
    }
    .es-desk-hidden {
      display:none;
      float:left;
      overflow:hidden;
      width:0;
      max-height:0;
      line-height:0;
      mso-hide:all;
    }
    
    @media only screen and (max-width:600px) {.bg-img { background-image:none!important;} p, ul li, ol li, a { line-height:150%!important } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120%!important } h1 { font-size:32px!important; text-align:left } h2 { font-size:26px!important; text-align:left } h3 { font-size:20px!important; text-align:left } h1 a { text-align:left } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:36px!important } h2 a { text-align:left } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:30px!important } h3 a { text-align:left } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:18px!important } .es-menu td a { font-size:16px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:16px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:16px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:inline-block!important } a.es-button, button.es-button { font-size:16px!important; display:inline-block!important; padding:15px 30px 15px 30px!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; max-height:inherit!important }; }
    </style>
     </head>
     <body style="width:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;padding:0;Margin:0">
      <div class="es-wrapper-color" style="background-color:#EEEEEE"><!--[if gte mso 9]>
          <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
            <v:fill type="tile" color="#eeeeee"></v:fill>
          </v:background>
        <![endif]-->
       <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#EEEEEE">
         <tr style="border-collapse:collapse">
          <td valign="top" style="padding:0;Margin:0">
           <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
             <tr style="border-collapse:collapse"></tr>
             <tr style="border-collapse:collapse">
              <td align="center" style="padding:0;Margin:0">
               <table class="es-header-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#ffffff;width:600px" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center">
                 <tr style="border-collapse:collapse">
                  <td align="left" style="Margin:0;padding-top:35px;padding-left:35px;padding-right:35px;padding-bottom:40px">
                   <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr style="border-collapse:collapse">
                      <td valign="top" align="center" style="padding:0;Margin:0;width:530px">
                       <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                         <tr style="border-collapse:collapse">
                          <td align="center" style="padding:0;Margin:0;font-size:0px"><img class="adapt-img" src="https://i.ibb.co/ZL8Pdc8/paluzlogo.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="400"></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
           </table>
           <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
             <tr style="border-collapse:collapse">
              <td align="center" style="padding:0;Margin:0">
               <table class="es-content-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
                 <tr style="border-collapse:collapse">
                  <td class="bg-img" align="left" style="Margin:0;padding-bottom:25px;padding-top:30px;padding-left:35px;padding-right:35px;background-image:url(https://i.ibb.co/9ZdKCpH/paluzbg1-bz6.png);background-repeat:no-repeat;background-position:left top;" background="https://i.ibb.co/9ZdKCpH/paluzbg1-bz6.png">
                   <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr style="border-collapse:collapse">
                      <td valign="top" align="center" style="padding:0;Margin:0;width:530px">
                       <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                         <tr style="border-collapse:collapse">
                          <td align="left" style="padding:0;Margin:0;padding-bottom:15px;padding-top:20px"><h3 style="Margin:0;line-height:22px;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;font-size:18px;font-style:normal;font-weight:bold;color:#333333">Estimado (a) ${nombre},</h3></td>
                         </tr>
                         <tr style="border-collapse:collapse">
                          <td align="left" style="padding:0;Margin:0;padding-bottom:10px;padding-top:15px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:24px;color:#777777;font-size:16px">Te informamos que tu solicitud de registro en nuestra plataforma fue recibida exitosamente.</p></td>
                         </tr>
                         <tr style="border-collapse:collapse">
                          <td align="left" style="padding:0;Margin:0;padding-top:5px;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:24px;color:#777777;font-size:16px"> Estaremos verificando tu solicitud y en breve se te enviará una respuesta sobre tu estatus en la organización. </p></td>
                         </tr>
                         <tr style="border-collapse:collapse">
                          <td align="left" style="padding:0;Margin:0;padding-top:35px;padding-bottom:10px"><h3 style="Margin:0;line-height:22px;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;font-size:18px;font-style:normal;font-weight:bold;color:#333333">¡Agradecemos tu interés en ser parte de nuestro equipo!</h3></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
           </table>
           <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
             <tr style="border-collapse:collapse">
              <td align="center" style="padding:0;Margin:0">
               <table class="es-content-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
                 <tr style="border-collapse:collapse">
                  <td align="left" style="padding:0;Margin:0;padding-top:15px;padding-left:35px;padding-right:35px">
                   <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr style="border-collapse:collapse">
                      <td valign="top" align="center" style="padding:0;Margin:0;width:530px">
                       <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                         <tr style="border-collapse:collapse">
                          <!-- <td align="center" style="padding:0;Margin:0;font-size:0"><img src="images/18501522065897895.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="46"></td> -->
                         </tr> 
                       </table></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
           </table>
           <table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
             <tr style="border-collapse:collapse">
              <td align="center" style="padding:0;Margin:0">
               <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#008080;width:600px;border-bottom:10px solid #008080" cellspacing="0" cellpadding="0" bgcolor="#008080" align="center">
                 <tr style="border-collapse:collapse">
                  <td align="left" style="padding:0;Margin:0">
                   <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr style="border-collapse:collapse">
                      <td valign="top" align="center" style="padding:0;Margin:0;width:600px">
                       <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                         <tr style="border-collapse:collapse">
                          <td style="padding:0;Margin:0">
                           <table class="es-menu" width="40%" cellspacing="0" cellpadding="0" align="center" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                             <tr class="links-images-top" style="border-collapse:collapse">
                              <!--<td style="Margin:0;padding-left:5px;padding-right:5px;padding-top:35px;padding-bottom:30px;border:0" width="100%" bgcolor="transparent" align="center"><a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;color:#ffffff;font-size:20px" href="https://instagram.com/primerosauxiliosluz/"><img src="https://i.ibb.co/5vRj0Tr/igicon.png" alt="@primerosauxiliosluz" title="@primerosauxiliosluz" height="27" align="absmiddle" style="display:inline-block !important;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;padding-bottom:5px"><br>@primerosauxiliosluz</a></td> -->
                              <td style="Margin:0;padding-left:5px;padding-right:5px;padding-top:35px;padding-bottom:3px;border:0" width="100%" bgcolor="transparent" align="center"><a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;color:#ffffff;font-size:20px" href="https://instagram.com/primerosauxiliosluz/"><img src="https://i.ibb.co/Vmq6DDr/voluntarios-img.png" alt="@primerosauxiliosluz" title="@primerosauxiliosluz" height="150" width="550" align="absmiddle" style="display:inline-block !important;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;padding-bottom:5px"></a></td>
                             </tr>
                           </table></td>
                         </tr>
                         <tr style="border-collapse:collapse">
                          <td style="padding:0;Margin:0">
                           <table class="es-menu" width="40%" cellspacing="0" cellpadding="0" align="center" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                             <tr class="links-images-top" style="border-collapse:collapse">
                              <td style="Margin:0;padding-left:5px;padding-right:5px;padding-top:5px;padding-bottom:8px;border:0" width="100%" bgcolor="transparent" align="center"><a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;color:#ffffff;font-size:20px" href="https://instagram.com/primerosauxiliosluz/"><img src="https://i.ibb.co/5vRj0Tr/igicon.png" alt="@primerosauxiliosluz" title="@primerosauxiliosluz" height="27" align="absmiddle" style="display:inline-block !important;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;padding-bottom:5px"></a></td>
                              <td style="Margin:0;padding-left:5px;padding-right:5px;padding-top:3px;padding-bottom:5px;border:0" width="100%" bgcolor="transparent" align="center"><a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;color:#ffffff;font-size:20px" href="https://instagram.com/primerosauxiliosluz/"> @primerosauxiliosluz </a></td>
                            </tr>
                           </table></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
           </table>
           <table cellpadding="0" cellspacing="0" class="es-footer" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">
             <tr style="border-collapse:collapse">
              <td align="center" style="padding:0;Margin:0">
               <table class="es-footer-body" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
                 <tr style="border-collapse:collapse">
                  <td align="left" style="Margin:0;padding-top:35px;padding-left:35px;padding-right:35px;padding-bottom:40px">
                   <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr style="border-collapse:collapse">
                      <td valign="top" align="center" style="padding:0;Margin:0;width:530px">
                       <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                         <tr style="border-collapse:collapse">
                          <td align="center" style="padding:0;Margin:0;padding-bottom:15px;padding-top:10px;font-size:0px"><img src="https://i.ibb.co/kGWh0RY/icono-paluz-2.png" alt="PALUZ Logo" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" title="PALUZ Logo" width="37"></td>
                         </tr>
                         <tr style="border-collapse:collapse">
                          <td align="center" style="padding:0;Margin:0;padding-bottom:35px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:21px;color:#333333;font-size:14px"><strong> &copy; 2023 | PALUZ </strong></p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:21px;color:#333333;font-size:14px"><strong>Maracaibo, Edo. Zulia</strong></p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:21px;color:#333333;font-size:14px"><strong><a target="_blank" href="http://www.paluz.org" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#333333;font-size:14px">www.paluz.org</a></strong></p></td>
                         </tr>
                         <tr style="border-collapse:collapse">
                          <td esdev-links-color="#777777" align="left" class="es-m-txt-c" style="padding:0;Margin:0;padding-bottom:5px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:21px;color:#777777;font-size:14px">Si usted no creó una cuenta usando esta dirección de correo electrónico, por favor ignore este correo.</p></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
           </table></td>
         </tr>
       </table>
      </div>
     </body>
     <script>
      const paragraph = '
      <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:21px;color:#333333;font-size:14px">
        <strong>
          &copy; ${new Date().getFullYear()} - PALUZ
        </Strong>
      </p>
    ';
      document.getElementById('copyright').innerHTML = paragraph;
    </script>`,
    }

  //ES6
  sgMail
  .send(msg)
  .then(() => {}, error => {
    console.error(error);
  
    if (error.response) {
      console.error(error.response.body)
    }
  });

 
  };
module.exports = {
    emailRegistro,
    emailOlvidePassword,
    enviar,
    rechazo,
    asignarContraseña,
    convocatoria,
    enviarCorreoRegistro 
    // loginDid,
    // enviarCorreo,
    // reestablecerContrasena,
    // tipoMembresia
};