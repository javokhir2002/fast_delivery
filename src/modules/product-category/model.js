import fetch from '../../lib/postgres.js'

export default {
    post: async ({sub_category_id,name}) => {
        try {
            return await fetch(false, `insert into product_category (sub_category_id,name) values ($1, $2) returning *`,sub_category_id, name)
        } catch (error) {
            console.error(error);
        }
    },
    delete: async ({id,status}) => {
        try {
            return await fetch(false, `update product_category set status = $2 where id = $1 returning *`, id, status)
        } catch (error) {
            console.error(error);
        }
    },
    get: async () => {
        try {
            return await fetch(true, `select * from product_category`)
        } catch (error) {
            console.error(error);
        }
    },
    put: async ({id,name}) => {
        try {
            return await fetch(false, 
            `update product_category set name = $2 where id = $1 returning *`, id,name)
        } catch (error) {
            console.error(error);
        }
    }
}




