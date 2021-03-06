import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'tab-component',
  scoped: true,
})
export class TabComponent {
  @State() setActive: string = 'json';
  @Prop() doc;
  @Prop() responseLabel;

  activeHandler(id) {
    this.setActive = id;
  }

  render() {
    return (
      <div class="">
        <p class="text-gray-400 pt-8 pb-2">Output :</p>

        <div class="border-b border-gray-200 ">
          <ul class="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500">
            <li class="mr-2">
              <button
                onClick={() => this.activeHandler('json')}
                // class="inline-flex p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active group"
                class={
                  this.setActive === 'json'
                    ? 'inline-flex p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active group'
                    : 'inline-flex p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 group'
                }
                aria-current="page"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                Raw JSON
              </button>
            </li>
            <li class="mr-2">
              <button
                onClick={() => this.activeHandler('table')}
                class={
                  this.setActive === 'table'
                    ? 'inline-flex p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active group'
                    : 'inline-flex p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 group'
                }
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Table
              </button>
            </li>
          </ul>
        </div>

        {/* content */}
        <div class="py-4 text-gray-500 max-h-72 overflow-y-scroll">
          {this.setActive === 'json' ? (
            <res-editor responseLabel={this.responseLabel} doc={JSON.stringify(this.doc, null, 2)}></res-editor>
          ) : (
            <data-table doc={this.doc}></data-table>
          )}
        </div>
      </div>
    );
  }
}
