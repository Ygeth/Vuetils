# Modal

**Aprox. this way is the way to use it. Some CSS changes will require inside coding**

```html
<!-- Modal -->
<div class="absolute" v-if="showModal">
  <Modal
    styleContainer="flex flex-col h-full p-8 text-center  justify-around"
    @confirm="requireDocument()"
    @close="toggleModal()"
    title="REQUIRE DOCUMENT"
    textAccept="REQUIRE DOCUMENT"
    height="h-1/4"
  >
    <template slot="body">
      <div class="my-6 px-8">
        <input
          type="text"
          class="w-full h-10 pl-4 text-sm rounded focus:placeholder-darkShade focus:outline-none border border-gray-200"
          :placeholder="'Document request' | firstCapital"
          v-model="newTextRequest"
        />
      </div>
    </template>
  </Modal>
</div>
```
