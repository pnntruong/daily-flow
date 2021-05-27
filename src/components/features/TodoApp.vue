<template>
    <div class="row d-flex justify-content-center container">
    <div class="col-md-8">
        <div class="card-hover-shadow-2x mb-3 card">
            <div class="card-header-tab card-header">
                <div class="card-header-title font-size-lg text-capitalize font-weight-normal fs-3">Task Lists</div>
            </div>
            <div class="scroll-area-sm">
                <perfect-scrollbar class="ps-show-limits">
                    <div style="position: static;" class="ps ps--active-y">
                        <div class="ps-content">
                            <ul class=" list-group list-group-flush">
                                <li class="list-group-item"
                                    v-for="(task, key) in taskList" :key="key">
                                    <div class="todo-indicator bg-warning"></div>
                                    <div class="widget-content p-0">
                                        <div class="widget-content-wrapper">
                                            <div class="widget-content-left mr-2">
                                                <div class="custom-checkbox custom-control">
                                                    <input
                                                        style="cursor: pointer;"
                                                        class="custom-control-input"
                                                        id="exampleCustomCheckbox12"
                                                        type="checkbox"
                                                        v-model="task.isDone">
                                                </div>
                                            </div>
                                            <div class="widget-content-left ms-2"
                                                :class="{done : task.isDone}">
                                                <div class="widget-heading fs-4">{{ task.title }}<div class="badge bg-danger ms-2">{{ task.badge }}</div>
                                                </div>
                                                <div class="widget-subheading"><i>{{ task.description }} </i></div>
                                            </div>
                                            <div class="widget-content-right"> <button class="border-0 btn-transition btn btn-outline-danger" @click="delTask(task)"> Delete </button> </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </perfect-scrollbar>
            </div>
            <div class="d-block text-right card-footer text-center">
                <div class="card-footer-form mt-2 row"
                    :class="{show : showAddTaskForm}">
                    <label for="input-task-name"
                            class="col col-md-6 col-sm-12 d-flex flex-wrap justify-content-between">
                        <span style="min-width: 100px;">Task Title: </span>
                        <input  type="text"
                                id="input-task-name"
                                class="ms-2"
                                style="flex: 1;"
                                v-model="newTask.title"
                                @keydown.enter="addTask"
                            >
                    </label>
                    <label for="input-task-description"
                            class="col col-md-6 col-sm-12 d-flex flex-wrap justify-content-between">
                        <span style="min-width: 100px;">Description: </span>
                        <input  type="text"
                                id="input-task-description"
                                style="flex: 1;"
                                class="ms-2"
                                v-model="newTask.description"
                                @keydown.enter="addTask"
                            >
                    </label>
                    <!-- <label for="input-task-badge"
                            class="col col-md-6 col-sm-12 d-flex flex-wrap justify-content-between">
                        <span style="flex: 1;">Badge: </span>
                        <input  type="text"
                                id="input-task-badge"
                                style="flex: 2;"
                                class="ms-2"
                                v-model="newTask.badge"
                                @keydown.enter="addTask"
                            >
                    </label> -->
                </div>
                <div class="card-footer-control mt-2 mb-2">
                    <button class="btn btn-primary"
                            @click="addTask"
                        >Add Task</button>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            showAddTaskForm: false,
            newTask: {
                title: '',
                description: '',
                badge: '',
                isDone: false,
            },
            taskList: [
                {
                    title: 'Hello',
                    description: 'lorem dimsum',
                    badge: 'important',
                    isDone: false,
                }
            ],
        }
    },
  methods: {
    addTask(){
      if(this.newTask.title != ''){
        this.taskList.push(this.newTask);
        this.newTask = {
            title: '',
            description: '',
            badge: '',
            isDone: false,
        }
        this.showAddTaskForm = !this.showAddTaskForm;
      }
    },
    delTask(task){
      let index = this.taskList.indexOf(task);
      this.taskList.splice(index, 1);
    }
  }
}
</script>

<style lang="scss" scoped>
i {
    font-style: italic
}

.container {
    height: 80vh;
    margin: 10vh auto 4vh;
}

.card {
    box-shadow: 0 0.46875rem 2.1875rem rgba(4, 9, 20, 0.03), 0 0.9375rem 1.40625rem rgba(4, 9, 20, 0.03), 0 0.25rem 0.53125rem rgba(4, 9, 20, 0.05), 0 0.125rem 0.1875rem rgba(4, 9, 20, 0.03);
    border-width: 0;
    transition: all .2s;
    height: 100%;
    min-width: 250px;
}

.card-header:first-child {
    border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0
}

.card-header {
    display: flex;
    align-items: center;
    border-bottom-width: 1px;
    padding-top: 0;
    padding-bottom: 0;
    padding-right: 0.625rem;
    height: 3.5rem;
    background-color: #fff
}

.widget-subheading {
    color: #858a8e;
    font-size: 10px
}

.card-header.card-header-tab .card-header-title {
    display: flex;
    align-items: center;
    white-space: nowrap
}

.card-header .header-icon {
    font-size: 1.65rem;
    margin-right: 0.625rem
}

.card-header.card-header-tab .card-header-title {
    display: flex;
    align-items: center;
    white-space: nowrap
}

.btn-actions-pane-right {
    margin-left: auto;
    white-space: nowrap
}

.text-capitalize {
    text-transform: capitalize !important
}

.scroll-area-sm {
    flex: 1;
    overflow-x: hidden
}

.list-group-item {
    position: relative;
    display: block;
    padding: 0.75rem 1.25rem;
    margin-bottom: -1px;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.125);
}

.list-group {
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0
}

.todo-indicator {
    position: absolute;
    width: 4px;
    height: 60%;
    border-radius: 0.3rem;
    left: 0.625rem;
    top: 20%;
    opacity: .6;
    transition: opacity .2s
}

.bg-warning {
    background-color: #f7b924 !important
}

.widget-content {
    padding: 1rem;
    flex-direction: row;
    align-items: center
}

.widget-content .widget-content-wrapper {
    display: flex;
    flex: 1;
    position: relative;
    align-items: center
}

.widget-content .widget-content-right.widget-content-actions {
    visibility: hidden;
    opacity: 0;
    transition: opacity .2s
}

.widget-content .widget-content-right {
    margin-left: auto
}

.btn:not(:disabled):not(.disabled) {
    cursor: pointer
}

.btn {
    position: relative;
    transition: color 0.15s, background-color 0.15s, border-color 0.15s, box-shadow 0.15s
}

.btn-outline-success {
    color: #3ac47d;
    border-color: #3ac47d
}

.btn-primary {
    color: #fff;
    background-color: #3f6ad8;
    border-color: #3f6ad8;
}

.btn {
    position: relative;
    transition: color 0.15s, background-color 0.15s, border-color 0.15s, box-shadow 0.15s;
    outline: none !important
}

.card-footer {
    background-color: #fff
}
.hide{
    display: none!important;
}
.show{
    display:flex!important;
}
.widget-content-left{
    transition: .4s;
}
.widget-content-left.done{
    text-decoration: line-through;
    color: #ccc;
}
.badge{
    font-size: .7rem;
    position: absolute;
    top: 4px;
    transition: .4s;
}
.widget-content-left.done .badge {
    background-color: #ccc!important;
}
</style>