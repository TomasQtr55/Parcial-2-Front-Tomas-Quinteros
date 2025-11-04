import { defineStore } from "pinia";
import type { BookInCart } from "@/models/Book";
import { useBookStore } from "./bookStore";
import type { Book } from "@/models/Book";

interface cartstore{
    isLoading: boolean,
    data: BookInCart[],
    error: string | null
}
const stroe = useBookStore

export const storeCartBooks  = defineStore('cart', {
    state: ():cartstore =>({
        isLoading: true,
        data: [],
        error: null
    }),

    actions:{
        agregarAlCarrito(carrito:BookInCart){

            this.data.push(carrito)
            
        },

        eliminarDelCarrito(idlibro: number){
            const indice = this.data.findIndex((i)=> i.id === idlibro)

            this.data.splice(indice,1)
            console.log(indice)
            console.log("se borro un libro del carrito")
        }


    },
    getters:{

    

        cantidadCarrito:(state):number => state.data.length,

        listacarrito:(state): BookInCart[] =>state.data
    }
}
)