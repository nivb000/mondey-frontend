import previewImg from '../assets/imgs/board-preview.svg'
import { updateBoard } from '../store/actions/board.action'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

export const BoardPreview = ({ board }) => {

    const dispatch = useDispatch()

    const handleBoardFavorite = (ev) => {
        ev.preventDefault()
        board.isFavorite = !board.isFavorite
        dispatch(updateBoard(board))
    }

    return <Link to={`/board/${board.id}`}>
        <div className="board-preview">
            <img src={previewImg} alt="preview" />
            <div className='flex space-between align-center preview-text headline'>
                <div className='flex align-center'>
                    <svg viewBox="0 0 20 20" fill="currentColor" width="22" height="22" aria-hidden="true" aria-label="Public board" className="icon_component">
                        <path d="M7.5 4.5H16C16.2761 4.5 16.5 4.72386 16.5 5V15C16.5 15.2761 16.2761 15.5 16 15.5H7.5L7.5 4.5ZM6 4.5H4C3.72386 4.5 3.5 4.72386 3.5 5V15C3.5 15.2761 3.72386 15.5 4 15.5H6L6 4.5ZM2 5C2 3.89543 2.89543 3 4 3H16C17.1046 3 18 3.89543 18 5V15C18 16.1046 17.1046 17 16 17H4C2.89543 17 2 16.1046 2 15V5Z" fill="#676879" fillRule="evenodd" clipRule="evenodd"></path>
                    </svg>
                    <h4>{board.title}</h4>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="1.1em" height="1.1em" viewBox="0 0 24 24" onClick={handleBoardFavorite}>
                    <path fill={board?.isFavorite ? '#ffcb00' : 'none'} stroke={board?.isFavorite ? '#ffcb00' : 'currentColor'} strokeWidth="1.5" d="M9.153 5.408C10.42 3.136 11.053 2 12 2c.947 0 1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182c.28.213.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506c-.766.582-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452c-.347 0-.674.15-1.329.452l-.595.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882c.293-.941 1.523-1.22 3.983-1.776l.636-.144c.699-.158 1.048-.237 1.329-.45c.28-.213.46-.536.82-1.182l.328-.588Z"></path>
                </svg>
            </div>
            <div className='flex align-center preview-text'>
                <svg viewBox="0 0 33 33" fill="currentColor" width="18" height="18" aria-hidden="true" className="icon_component"><g clipPath="url(#clip0_1150_158978)"><path d="M20.3812 4.62863C20.3812 2.47439 18.6357 0.728027 16.4826 0.728027C14.3294 0.728027 12.584 2.47439 12.584 4.62863V8.91568C12.584 11.0699 14.3294 12.8163 16.4826 12.8163C18.6357 12.8163 20.3812 11.0699 20.3812 8.91568V4.62863Z" fill="url(#paint0_linear_1150_158978)"></path><path d="M5.11916 10.0994C3.07035 9.43366 0.870087 10.554 0.204732 12.6018C-0.460623 14.6495 0.660888 16.8492 2.7097 17.5149L6.78692 18.8397C8.83573 19.5054 11.036 18.385 11.7013 16.3373C12.3667 14.2895 11.2452 12.0898 9.19638 11.4241L5.11916 10.0994Z" fill="url(#paint1_linear_1150_158978)"></path><path d="M5.59794 26.3042C4.33171 28.0471 4.71733 30.4859 6.45925 31.7514C8.20117 33.017 10.6398 32.6301 11.906 30.8873L14.4259 27.419C15.6921 25.6762 15.3065 23.2374 13.5646 21.9718C11.8226 20.7062 9.38404 21.0931 8.1178 22.8359L5.59794 26.3042Z" fill="url(#paint2_linear_1150_158978)"></path><path d="M21.1629 30.8429C22.4291 32.5858 24.8677 32.9726 26.6096 31.7071C28.3516 30.4415 28.7372 28.0027 27.471 26.2599L24.9511 22.7916C23.6849 21.0488 21.2463 20.6619 19.5043 21.9275C17.7624 23.193 17.3768 25.6318 18.643 27.3747L21.1629 30.8429Z" fill="url(#paint3_linear_1150_158978)"></path><path d="M16.5188 21.7056C18.6553 21.7056 20.3872 19.9736 20.3872 17.8372 20.3872 15.7007 18.6553 13.9688 16.5188 13.9688 14.3823 13.9688 12.6504 15.7007 12.6504 17.8372 12.6504 19.9736 14.3823 21.7056 16.5188 21.7056zM3.89332 17.6821C6.04138 17.6821 7.78273 15.9408 7.78273 13.7927 7.78273 11.6447 6.04138 9.90332 3.89332 9.90332 1.74526 9.90332.00390625 11.6447.00390625 13.7927.00390625 15.9408 1.74526 17.6821 3.89332 17.6821zM16.4803 8.49289C18.6322 8.49289 20.3767 6.74844 20.3767 4.59654 20.3767 2.44465 18.6322.700195 16.4803.700195 14.3284.700195 12.584 2.44465 12.584 4.59654 12.584 6.74844 14.3284 8.49289 16.4803 8.49289zM8.75854 32.5044C10.9141 32.5044 12.6616 30.7569 12.6616 28.6013 12.6616 26.4457 10.9141 24.6982 8.75854 24.6982 6.60293 24.6982 4.85547 26.4457 4.85547 28.6013 4.85547 30.7569 6.60293 32.5044 8.75854 32.5044zM24.3244 32.4656C26.4753 32.4656 28.2191 30.7219 28.2191 28.571 28.2191 26.42 26.4753 24.6763 24.3244 24.6763 22.1734 24.6763 20.4297 26.42 20.4297 28.571 20.4297 30.7219 22.1734 32.4656 24.3244 32.4656z" fill="#6161FF"></path><path d="M27.8808 10.0984C29.9296 9.43268 32.1299 10.5531 32.7953 12.6008C33.4606 14.6486 32.3391 16.8482 30.2903 17.5139L26.2131 18.8387C24.1643 19.5044 21.964 18.384 21.2987 16.3363C20.6333 14.2885 21.7548 12.0888 23.8036 11.4231L27.8808 10.0984Z" fill="url(#paint4_linear_1150_158978)"></path><path d="M29.1028 17.6807C26.9547 17.6807 25.2134 15.9393 25.2134 13.7913C25.2134 11.6432 26.9547 9.90186 29.1028 9.90186C31.2508 9.90186 32.9922 11.6432 32.9922 13.7913C32.9922 15.9393 31.2508 17.6807 29.1028 17.6807Z" fill="#6161FF"></path></g><defs><linearGradient id="paint0_linear_1150_158978" x1="16.457" y1="-6.763" x2="16.543" y2="13.595" gradientUnits="userSpaceOnUse"><stop offset=".411" stopColor="#6C6CFF" stopOpacity=".9"></stop><stop offset="1" stopColor="#6C6CFF" stopOpacity=".2"></stop></linearGradient><linearGradient id="paint1_linear_1150_158978" x1="-6.928" y1="10.311" x2="12.461" y2="16.521" gradientUnits="userSpaceOnUse"><stop offset=".411" stopColor="#6C6CFF" stopOpacity=".9"></stop><stop offset="1" stopColor="#6C6CFF" stopOpacity=".2"></stop></linearGradient><linearGradient id="paint2_linear_1150_158978" x1="2.077" y1="37.827" x2="13.974" y2="21.306" gradientUnits="userSpaceOnUse"><stop offset=".411" stopColor="#6C6CFF" stopOpacity=".9"></stop><stop offset="1" stopColor="#6C6CFF" stopOpacity=".2"></stop></linearGradient><linearGradient id="paint3_linear_1150_158978" x1="31.034" y1="37.753" x2="18.998" y2="21.333" gradientUnits="userSpaceOnUse"><stop offset=".411" stopColor="#6C6CFF" stopOpacity=".9"></stop><stop offset="1" stopColor="#6C6CFF" stopOpacity=".2"></stop></linearGradient><linearGradient id="paint4_linear_1150_158978" x1="39.928" y1="10.31" x2="20.539" y2="16.52" gradientUnits="userSpaceOnUse"><stop offset=".411" stopColor="#6C6CFF" stopOpacity=".9"></stop><stop offset="1" stopColor="#6C6CFF" stopOpacity=".2"></stop></linearGradient><clipPath id="clip0_1150_158978"><path fill="#fff" d="M0 0H33V33H0z"></path></clipPath></defs></svg>
                <span>work management &gt; Main workspace</span>
            </div>
            <span className='last-edited'>Changed {new Date(+board.archivedat).toString().substring(0, 24)}</span>
        </div>
    </Link>
}
