import downTriangle from '../../Assets/downTriangle.svg';

const ItemList = (props) => {
    const {name,data} = props;

    return (
        <div className="flex flex-col gap-[0.5rem] w-full py-4">
            <div className="flex gap-10 my-2">
                <h4 className="text-[0.75rem]">
                    {name}&nbsp;({data ? data.length : 0})
                </h4>
                <img src={downTriangle} alt="dropdown" />
            </div>

            {data ? (
                data.map((item, key) => (
                    <div key={key} className="w-full flex justify-between">
                        <p className='text-[0.65rem] font-medium'>{item.name}</p>
                        <p className='text-[0.65rem] font-medium'>{item.quantity}</p>
                    </div>
                ))
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default ItemList;
