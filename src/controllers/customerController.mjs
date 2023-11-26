const controller = {};

controller.list = (req, res)=>{
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM customer', (err, customers) => {
            if (err){
                res.json(err);
            }
            res.render('customers', {
                data: customers
            });
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;

    req.getConnection((err, conn) => {
        conn.query('INSERT INTO customer set ?', [data], (err, customer) => {
            res.redirect('/');
        });
    })
};

controller.edit = (req, res) => {
    const {id} = req.params;

    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM customer WHERE id = ?', [id], (err, customer) => {
            res.render( 'customer_edit', {
                data: customer[0]
            })
        });
    });
};

controller.update = (req, res) => {
    const {id} = req.params;
    const newCustomer = req.body;

    req.getConnection((err, conn) => {
        conn.query('UPDATE customer set ? WHERE id = ?', [newCustomer, id], (err, rows) => {
            res.redirect('/');
        });
    });
};

controller.delete = (req, res) => {
    const {id} = req.params;

    req.getConnection((err, conn) => {
        conn.query('DELETE FROM customer WHERE id = ?', [id], (err, rows) => {
            res.redirect('/');
        });
    });
};

controller.search = (req, res) => {
    const { name, email, phone } = req.query;
    req.getConnection((err, conn) => {
        if (err) {
            res.status(500).send(err);
            return;
        }

        const query = `
            SELECT * FROM customer 
            WHERE name LIKE ? 
            AND email LIKE ? 
            AND phone LIKE ?
        `;
        conn.query(query, [`%${name}%`, `%${email}%`, `%${phone}%`], (err, results) => {
            if (err) {
                res.status(500).send(err);
                return;
            }

            res.json(results);
        });
    });
};

export default controller;