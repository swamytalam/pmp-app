var express = require("express");
var router = express.Router();

const logger = require('../logger');

router.get('/', async (req, res) => {
  const allocation = await req.context.models.Allocation.findAll();
  logger.info('Find All');
  return res.send(allocation);
});

router.get('/:id', async (req, res) => {
  const allocation = await req.context.models.Allocation.findByAllocationId(req.params.id);
  logger.info('find by allocation id', allocation);
  return res.send(allocation);
});

module.exports = router;
