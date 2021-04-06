#Select Custom


<SelectCustom
  id="orderSelect"
  :options="list"
  v-model="selectedelement"
  class="w-16"
  stylewrap="flex-col-center w-full text-sm pl-1 truncate rounded text-left"
  styleoption="flex-col-center p-1 text-sm text-red text-left hover:text-white hover:bg-red"
  styleoptionwrap="bg-white border-red border border-t-0 rounded-b h-auto"
  styleicon="border-red flex-col-center"
/>

data() {
return{
 list: { default: [{ value: 0, name: " " }] },
 selectedelement: 1
}
}