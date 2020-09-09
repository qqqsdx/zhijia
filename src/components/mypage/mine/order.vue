<template>
    <div>
        <myorder/>
        <myordertab/>
        <router-view></router-view>
    </div>
</template>
<script>
import myorder from '../discountcomponents/ordertitle'
import myordertab from '../discountcomponents/ordertab'
export default {
    data(){
        return{

        }
    },
    components:{
        myorder,
        myordertab
    }

    
}
</script>