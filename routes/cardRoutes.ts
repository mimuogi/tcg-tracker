import { Router } from 'express';

const router = Router();

/*
router.get('/:name', async (req, res) => {
  const cardName = req.params.name;
  try {
    const card = await getCardByName(cardName);
    res.json(card);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching card data' });
  }
});

export default router;
*/