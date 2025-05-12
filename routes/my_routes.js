const express=require('express');
const router=express.Router();
const bookController=require('../controllers/bookController');

router.get('/search',bookController.searchPage);
router.get('/',bookController.getAllBooks);
router.get('/add',bookController.formAdd);
router.post('/',bookController.addBook);

router.get('/year',(req,res)=>{
    const{year}=req.query;
    if(!year) return res.redirect('/books');
    return res.redirect(`/books/year/${year}`);
});
router.get('/year/:year',bookController.getBookByYear);

router.get('/edition',(req,res)=>{
    const{edition}=req.query;
    if(!edition) return res.redirect('/books');
    return res.redirect(`/books/edition/${edition}`);
});
router.get('/edition/:edition',bookController.getBooksByEdition);

router.get('/:id',bookController.getBookByID);
router.get('/:id/edit',bookController.formEdit);
router.put('/:id',bookController.updateBook);
router.delete('/:id',bookController.deleteBook);

module.exports=router;

