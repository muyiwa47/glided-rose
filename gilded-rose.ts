export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }
    
    IsNotNameValue(item, name) {
      return item.name !== name;
    }

    IsQuantityGreater(item, value){
      return item.quantity > value
    }

    IsQuantityLessThanValue(item, quantity) {
        return item.quantity < quantity;
    }
    
    IsSellInLessThanValue(item, value) {
        return item.sellIn < value;
    }

    quantityDecrement(item) {
        return item.quality = item.quality - 1
    }

    quantityIncreament(item) {
        return item.quality = item.quality + 1
    }

    IsSellInDecreament(item){
       return item.sellIn = item.sellIn - 1;
    }

    setDecreamentByName(item){
        if (this.IsQuantityGreater(item, 0)) {
            if (this.IsNotNameValue(item, 'Sulfuras, Hand of Ragnaros')) {
                this.quantityDecrement(item);
            }
        }
    }

    setIncreamentByValue(item){
        if (this.IsQuantityLessThanValue(item, 50)) {
            this.quantityIncreament(item)
        }
    }

    sellInValueOperation(item){
        if (this.IsSellInLessThanValue(item, 0)) {
            (this.IsNotNameValue(item, 'Aged Brie') && this.IsNotNameValue(item, 'Backstage passes to a TAFKAL80ETC concert')) ?  this.setDecreamentByName(item) :  item.quality = item.quality - item.quality
        } else {
            this.setIncreamentByValue(item)
        }
    }


    QunatityValueOperation(item) {
        if (this.IsNotNameValue(item, 'Aged Brie') && this.IsNotNameValue(item, 'Backstage passes to a TAFKAL80ETC concert')) {
            this.setDecreamentByName(item)   
        } else {                 
             if (this.IsQuantityLessThanValue(item, 50)) { 
                this.quantityIncreament(item)
                
    
                    if (this.IsNotNameValue(item, 'Backstage passes to a TAFKAL80ETC concert')) {
    
                        if (this.IsQuantityLessThanValue(item, 11)) {
                          this.setIncreamentByValue(item)
                        }
    
                        if (this.IsSellInLessThanValue(item, 6)) {
                          this.setIncreamentByValue(item)
                        }
                    }
            }
    
        }
    }

    updateQuality() {

        for (let i = 0; i < this.items.length; i++) {

            if (this.IsNotNameValue(this.items[i], 'Aged Brie') && this.IsNotNameValue(this.items[i], 'Backstage passes to a TAFKAL80ETC concert')) {
                this.setDecreamentByName(this.items[i])
            } else {              
                this.QunatityValueOperation(this.items[i]) 
            }
        
            if (this.IsNotNameValue(this.items[i], 'Sulfuras, Hand of Ragnaros')) { 
                this.IsSellInDecreament(this.items[i])
            }

            if (this.IsSellInLessThanValue(this.items[i], 0)) {
                this.sellInValueOperation(this.items[i])
            }

                return this.items;
          }
       }
}