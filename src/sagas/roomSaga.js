import { roomActions } from '../slice/roomSlice';

export function* registerRoomAsync(action) {
    console.log(action);
    debugger;
    yield console.log('finish');
}
