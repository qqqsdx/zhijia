<template>
    <div>
<Mytitle/> <!--类别-->
  <Mytab/><!--tab切换-->
    </div>
</template>
<script>
import Mytitle from '../discountcomponents/title'
import Mytab from '../discountcomponents/tab'
export default {
    data(){
        return{

        }
    },
    components:{
        Mytitle,
        Mytab,

    }
}
</script>
