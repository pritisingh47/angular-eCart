export class Products {
    id: number
    name: string
    description: string
    price: number
    imageUrl: string

    constructor(id=0,name='',description='',price=0,imageUrl=''){
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.imageUrl = imageUrl;
    }
}
