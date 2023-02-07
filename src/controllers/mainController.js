const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	index: (req, res) => {
		//do magic
		let productsInsale = products.filter(product => product.category === 'in-sale')
		let productsVisited = products.filter(product => product.category === 'visited')

		res.render('index', {
			productsVisited,
			productsInsale,
			toThousand
		})
	},
	// search: (req, res) => {
	// 	res.render('results')
	// },
};

module.exports = controller;
