const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try{
    const allTags = await Tag.findAll({
      include: [{model: Product}]
    })
    if(!allTags){
      res.status(400).json({message: "no tags found!"})
      return
    }
    res.status(200).json(allTags)
  }
  catch(err){
    res.status(500).json(err)
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try{
    const currentTag = await Tag.findByPk(req.params.id,{
    
      include: [{model: Product}]
    })
    if(!currentTag){
      res.status(400).json({ message: "tag not found" })
      return
    }
    res.status(200).json(currentTag)
  }
  catch(err){
    res.status(500).json(err)
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const newTag = await Tag.create({
      tag_name: req.body.tag_name
    })
    res.status(200).json({message: "your tag has been created!"})
  }
  catch (err){
    res.status(400).json(err)
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const updatedTag = Tag.update({
      tag_name: req.body.tag_name
    },
    {
      where:{
        id: req.params.id
      }
    })
    res.status(200).json({message: "tag has been updated!"})
  }
  catch (err){
    res.status(400).json(err)
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const deletedTag = await Tag.destroy({
      where: {
        id: req.params.id
      }
    })
    res.status(200).json({message: "tag has been deleted!"})
  }
  catch (err){
    res.status(500).json(err)
  }
});

module.exports = router;
