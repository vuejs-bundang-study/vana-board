const _posts = [
  { id: 1, title: '게시글1', writer: '작성자1', content: 'test' },
  { id: 2, title: '게시글2', writer: '작성자2', content: 'test' },
  { id: 3, title: '게시글2', writer: '작성자2', content: 'test' }
]

export default {
  getPosts (cb) {
    setTimeout(() => cb(_posts), 100)
  }
}
