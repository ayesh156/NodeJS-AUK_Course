import { log } from "node:console";
import { createConnection } from "mysql2/promise";
import "dotenv/config";

(async()=>{
  try {
    const db = await createConnection({
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
    });

    const [result] = await db.query("SELECT name FROM `customer`");
    log(result);
  } catch (error) {
    log(error);
  }
})();


// import { log } from "node:console";
// import { createConnection } from "mysql2";
// import "dotenv/config";

// const db = createConnection({
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   user: process.env.DB_USERNAME,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_DATABASE,
// });

// db.connect((err) => {
//   if (err) {
//     log(err);
//   } else {
//     log("db connected");
//     const sqlQuary =
//       "UPDATE `office_details` SET name = 'Eshara' WHERE id = 2";
//     db.query(sqlQuary, (err, result) => {
//       if (err) {
//         log(err);
//       } else {
//         log(result);
//       }
//     });
//   }
// });
