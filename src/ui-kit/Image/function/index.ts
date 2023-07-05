import {AllThings} from "../type";

interface IImageObject {
    img?: AllThings,
    name: string
}

type TypeGetImage = (arg: string) => IImageObject

export const getImage: TypeGetImage = (id: AllThings) => {
    switch (id ) {
        case AllThings.CigarettesPack as string:
            return {img: AllThings.CigarettesPack, name: 'Пачка сигарет'}
        case AllThings.Cheese as string:
            return {img: AllThings.Cheese, name: 'Кусочек сыра'}
        default:
            return {name:''};
    }

}
