import { fromJs } from 'Immutable';

export default function getImmutableObject(object) {
    return fromJS(object);
}