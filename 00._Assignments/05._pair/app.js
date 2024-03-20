import express from 'express';
import sqlite3 from 'sqlite3';
import fetch from 'node-fetch';

const app = express();
app.use(express.json())
const port = 8080;

const db = new sqlite3.Database('orders.db');

// Create 'orders' table if it doesn't exist
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS orders (
    orderId TEXT,
    amount REAL,
    status TEXT,
    webhook TEXT
  )`);
});

// Endpoint to receive webhook events
app.post('/payment', async (req, res) => {
    try {
      const { orderId, amount, webhook } = req.body;
      console.log(req.body);
  
      // Save order to the database
      db.run('INSERT INTO orders (orderId, amount, status, webhook) VALUES (?, ?, ?, ?)',
        [orderId, amount, 'Succes', webhook],
        async function(err) {
          if (err) {
            console.error('Error saving order:', err.message);
            res.status(500).send('Internal Server Error');
            return;
          } else {
            res.send({orderid: orderId, status: 'Succes'});
          }
          
        });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).send('Internal Server Error');
    }
});

  

app.post("/deleteOrder", async (req, res) => {
  const {orderID, webhook} = req.body;
  let deleted;
  try {
      deleted = await Orders.deleteOne({orderID, webhook});
      if (deleted.deletedCount === 0) {
          console.log("No order found with the specified id.");
      } else {
          console.log("Order deleted successfully.");
      }
  } catch (error) {
      console.error("Error deleting the order:", error);
  }
  res.status(201).json(deleted)
})

// Endpoint to send response back to the provided webhook URL
app.post('/sendResponse', async (req, res) => {
  try {
    const { orderId, webhook } = req.body;

    // Send a response with orderId and status 'Paid' to the provided webhook
    await sendResponse(webhook, { orderId, status: 'Paid' });
    res.status(200).send('Response sent successfully');
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Function to send response to the provided webhook
async function sendResponse(webhook, payload) {
  try {
    const response = await fetch(webhook, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
    console.log('Response sent successfully');
  } catch (error) {
    console.error('Error sending response:', error);
    throw error;
  }
}


// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//INTEGRATOR

app.post('/order', async(req, res) => {
    try {
        const {orderId, amount, webhook} = req.body;

        const response = await fetch("https://morten.serveo.net/payment", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({orderId, amount, webhook}),
        })
        const data = await response.json();
        res.json(data);
    } catch (error){
        console.log("error")
        res.status(500)
    }
});

app.post('/paymentUpdate', async(req, res) => {
    console.log(req.body)
});

app.delete('/cancelPayment', async (req, res) => {
  const data = req.body;

  try {
      const dataFromFetch = await fetch('https://morten.serveo.net/cancelpayment', {
          method: "DELETE",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
      });
      console.log(await dataFromFetch.json());
  }catch (error) {
      console.error('Error:', error);
  }
  res.status(200).send('OK');
});


// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
