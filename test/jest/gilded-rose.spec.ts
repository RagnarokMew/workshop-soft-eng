import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
    it('dexterity vest lifespan', () => {
      const gildedRose = new GildedRose([new Item('+5 Dexterity Vest', 10, 20)]);

      // day 1
      let items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(9);
      expect(items[0].quality).toBe(19);

      for(let i = 1; i<5; i++)
        items = gildedRose.updateQuality();

      // day 5
      expect(items[0].sellIn).toBe(5);
      expect(items[0].quality).toBe(15);

      for(let i = 5; i<10; i++)
        items = gildedRose.updateQuality();

      expect(items[0].sellIn).toBe(0);
      expect(items[0].quality).toBe(10);
  })


    it('aged brie lifespan', () => {
      const gildedRose = new GildedRose([new Item('Aged Brie', 2, 0)]);

      // day 1
      let items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(1);
      expect(items[0].quality).toBe(1);

      for(let i = 1; i<5; i++)
        items = gildedRose.updateQuality();

      // day 5
      expect(items[0].sellIn).toBe(-3);
      expect(items[0].quality).toBe(8);

      for(let i = 5; i<10; i++)
        items = gildedRose.updateQuality();

      expect(items[0].sellIn).toBe(-8);
      expect(items[0].quality).toBe(18);
  })


    it('Elixir of the Mongoose', () => {
      const gildedRose = new GildedRose([new Item('Elixir of the Mongoose', 5, 7)]);

      // day 1
      let items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(4);
      expect(items[0].quality).toBe(6);

      for(let i = 1; i<5; i++)
        items = gildedRose.updateQuality();

      // day 5
      expect(items[0].sellIn).toBe(0);
      expect(items[0].quality).toBe(2);

      for(let i = 5; i<10; i++)
        items = gildedRose.updateQuality();

      expect(items[0].sellIn).toBe(-5);
      expect(items[0].quality).toBe(0);
  })


    it('Sulfuras, Hand of Ragnaros test 1', () => {
      const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 0, 80)]);

      // day 1
      let items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(0);
      expect(items[0].quality).toBe(80);

      for(let i = 1; i<5; i++)
        items = gildedRose.updateQuality();

      // day 5
      expect(items[0].sellIn).toBe(0);
      expect(items[0].quality).toBe(80);

      for(let i = 5; i<10; i++)
        items = gildedRose.updateQuality();

      expect(items[0].sellIn).toBe(0);
      expect(items[0].quality).toBe(80);
  })


    it('Sulfuras, Hand of Ragnaros test2', () => {
      const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', -1, 80)]);

      // day 1
      let items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(-1);
      expect(items[0].quality).toBe(80);

      for(let i = 1; i<5; i++)
        items = gildedRose.updateQuality();

      // day 5
      expect(items[0].sellIn).toBe(-1);
      expect(items[0].quality).toBe(80);

      for(let i = 5; i<10; i++)
        items = gildedRose.updateQuality();

      expect(items[0].sellIn).toBe(-1);
      expect(items[0].quality).toBe(80);
  })


    it('Backstage passes to a TAFKAL80ETC concert 1', () => {
      const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20)]);

      // day 1
      let items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(14);
      expect(items[0].quality).toBe(21);

      for(let i = 1; i<5; i++)
        items = gildedRose.updateQuality();

      // day 5
      expect(items[0].sellIn).toBe(10);
      expect(items[0].quality).toBe(25);

      for(let i = 5; i<10; i++)
        items = gildedRose.updateQuality();

      expect(items[0].sellIn).toBe(5);
      expect(items[0].quality).toBe(35);
  })


    it('Backstage passes to a TAFKAL80ETC concert 2', () => {
      const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 49)]);

      // day 1
      let items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(9);
      expect(items[0].quality).toBe(50);

      for(let i = 1; i<5; i++)
        items = gildedRose.updateQuality();

      // day 5
      expect(items[0].sellIn).toBe(5);
      expect(items[0].quality).toBe(50);

      for(let i = 5; i<10; i++)
        items = gildedRose.updateQuality();

      expect(items[0].sellIn).toBe(0);
      expect(items[0].quality).toBe(50);
  })


    it('Backstage passes to a TAFKAL80ETC concert 3', () => {
      const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 49)]);

      // day 1
      let items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(4);
      expect(items[0].quality).toBe(50);

      for(let i = 1; i<5; i++)
        items = gildedRose.updateQuality();

      // day 5
      expect(items[0].sellIn).toBe(0);
      expect(items[0].quality).toBe(50);

      for(let i = 5; i<10; i++)
        items = gildedRose.updateQuality();

      expect(items[0].sellIn).toBe(-5);
      expect(items[0].quality).toBe(0);
  })


    it('Conjured Mana Cake Test', () => {
      const gildedRose = new GildedRose([new Item('Mana Cake', 3, 6)]);

      // day 1
      let items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(2);
      expect(items[0].quality).toBe(4);

      for(let i = 1; i<5; i++)
        items = gildedRose.updateQuality();

      // day 5
      expect(items[0].sellIn).toBe(-2);
      expect(items[0].quality).toBe(0);

      for(let i = 5; i<10; i++)
        items = gildedRose.updateQuality();

      expect(items[0].sellIn).toBe(-7);
      expect(items[0].quality).toBe(0);
  })


});
