export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }

    passTime() { this.sellIn -= (this.name == "Sulfuras, Hand of Ragnaros") ? 0 : 1; }

    calculateQuality()  {
        if(this.name == "Sulfuras, Hand of Ragnaros")
          return;

        let decay = 1;
        decay = ( this.sellIn < 0 ) ? 2 : 1;

        if(this.name == "Aged Brie")
        {
          if(this.sellIn == 0) // forced to add this because in the original code, brie quality does not share the same logic as other items
            decay += 1;        // normally items change in quality x2 once sellIn is < 0, but for Brie it's calculated after the tick changes, thus for Brie the cond is <= 0

          decay*=-1;
        }

        if(this.name == "Backstage passes to a TAFKAL80ETC concert") {
          decay = -1;

          if(this.sellIn < 11)
            decay-=1;
          if(this.sellIn < 6)
            decay-=1

          if(this.sellIn < 0)
          {
            this.quality = 0;
            return;
          }
        }

        this.quality -= decay

        if(this.quality > 50)
          this.quality = 50;

        if(this.quality < 0)
          this.quality = 0;
    }


}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {

          this.items[i].calculateQuality();
          this.items[i].passTime();

          ///old code
      /*
            if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
                if (this.items[i].quality > 0) {
                    if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                        this.items[i].quality = this.items[i].quality - 1
                    }
                }
            } else {
                if (this.items[i].quality < 50) {
                    this.items[i].quality = this.items[i].quality + 1
                    if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
                        if (this.items[i].sellIn < 11) {
                            if (this.items[i].quality < 50) {
                                this.items[i].quality = this.items[i].quality + 1
                            }
                        }
                        if (this.items[i].sellIn < 6) {
                            if (this.items[i].quality < 50) {
                                this.items[i].quality = this.items[i].quality + 1
                            }
                        }
                    }
                }
            }
            if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                this.items[i].sellIn = this.items[i].sellIn - 1;
            }
            if (this.items[i].sellIn < 0) {
                if (this.items[i].name != 'Aged Brie') {
                    if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
                        if (this.items[i].quality > 0) {
                            if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                                this.items[i].quality = this.items[i].quality - 1
                            }
                        }
                    } else {
                        this.items[i].quality = this.items[i].quality - this.items[i].quality
                    }
                } else {
                    if (this.items[i].quality < 50) {
                        this.items[i].quality = this.items[i].quality + 1
                    }
                }
            }*/
        }

        return this.items;
    }
}
