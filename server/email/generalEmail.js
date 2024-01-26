const express = require("express");
const app = express();

const multer = require("multer");
const path = require("path");

// upload
const upload = multer();
const nodemailer = require("nodemailer");
let smtpTransport = require("nodemailer-smtp-transport");

// email data
smtpTransport = nodemailer.createTransport(
  smtpTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "applefireappdemo@gmail.com",
      pass: "jtmpydvgxhzzsjau",
    },
  })
);

app.post("/send-email", upload.single("file"), (req, res) => {
  console.log(req.file);
  const {
    number,
    name,
    //   phoneprop,
    //   emailprop,
    //   positionprop,
    //   questionprop,
  } = req.body;
  //   const file = req.file;

  //prepare email content
  const mailOptions = {
    from: "biomazzemails@gmail.com",
    to: "biomazzemails@gmail.com",
    subject: "test email",
    html: `
      <td class="esd-stripe" align="center" bgcolor="#5A6F8E" style="background-color: #5a6f8e;">
      <table class="es-content-body" style="background-color: #ffffff;" width="560" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center">
          <tbody>
              <tr>
                  <td class="esd-structure es-p30t es-p30b es-p20r es-p20l" align="left">
                      <table width="100%" cellspacing="0" cellpadding="0">
                          <tbody>
                              <tr>
                                  <td class="es-m-p0r es-m-p20b esd-container-frame" width="520" valign="top" align="center">
                                      <table width="100%" cellspacing="0" cellpadding="2">
                                          <tbody>
                                              <tr>
                                                  <td align="center" class="esd-block-text es-p10t es-p10b es-p40r es-p40l es-m-p0r es-m-p0l" bgcolor="#07181b">
                                                      <h1 style="color: #e1e2e4;">Hire&nbsp;<strong>Inquiry</strong></h1>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td align="left" class="esd-block-text es-p20t es-p10b es-p25r es-p20l">
                                                      <p><br></p>
                                                     
                                                      <p style="font-size: 19px; color: #3a4b60; font-family: helvetica, 'helvetica neue', arial, verdana, sans-serif;">NUMBER: ${number}<br>FULL NAME: ${name}<br>
                    
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                  </td>
              </tr>
          </tbody>
      </table>
  </td>
            `,
    //   attachments: file
    //     ? [{ filename: file.originalname, content: file.buffer }]
    //     : [],
  };

  // send email
  smtpTransport.sendMail(mailOptions, (err, info) => {
    if (err) {
      res.status(500).send({
        success: false,
        message: "Something went wrong. Try again later",
      });
    } else {
      res.send({
        success: true,
        message: "Thanks for contacting us. We will get back to you shortly",
      });
    }
  });
});
