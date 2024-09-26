// src/routes/mtgCardRoutes.ts
import { Router } from 'express';
import { getMTGCardByName } from '../../services/scryfallCardService';

const router = Router();

router.get('/:name', async (req, res) => {
  const cardName = req.params.name;
  try {
    const card = await getMTGCardByName(cardName);
    res.json(card);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching MTG card data' });
  }
});

export default router;
