import Item from '../../shared/ui/Item/Item';
import './Wrapper.scss';

function Wrapper() {

    const Rename =  <button className="item__rename">
                    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3333 5.33334H10.6667V8.00001H6.66667C4.45754 8.00001 2.66667 9.79088 2.66667 12V20C2.66667 22.2092 4.45754 24 6.66667 24H10.6667V26.6667H13.3333V5.33334ZM10.6667 10.6667V21.3333H6.66667C5.9303 21.3333 5.33334 20.7364 5.33334 20V12C5.33334 11.2636 5.9303 10.6667 6.66667 10.6667H10.6667Z" fill="#E0D5CA" />
                        <path d="M25.3333 21.3333H16V24H25.3333C27.5425 24 29.3333 22.2092 29.3333 20V12C29.3333 9.79087 27.5425 8 25.3333 8H16V10.6667H25.3333C26.0697 10.6667 26.6667 11.2636 26.6667 12V20C26.6667 20.7364 26.0697 21.3333 25.3333 21.3333Z" fill="#E0D5CA" />
                    </svg>
                </button>
    const Delete = <button className="item__delete">
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.242 9.05991e-06L0.00599957 4.23901L11.67 15.909L0 27.579L4.245 31.818L15.912 20.151L27.582 31.821L31.821 27.576L20.154 15.909L31.824 4.23901L27.579 9.05991e-06L15.912 11.667L4.242 9.05991e-06Z" fill="#E0D5CA" />
                </svg>
            </button>
    const Words = [
        {Word: 'Aplication', Translate: 'Приложение', Tag: '#software'}
    ]

    return (
        <>
            <div className="wrapper">
                <Item Rename={Rename} Delete={Delete} title={Words[0].Word} />
            </div>
            <div className="wrapper">
                <Item Rename={Rename} title={Words[0].Translate} />
            </div>
            <div className="wrapper">
                <Item Rename={Rename} Delete={Delete} title={Words[0].Tag} />
            </div>
        </>
    )
}

export default Wrapper