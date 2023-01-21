import React, {useEffect} from 'react'
import Paginator from "../common/Paginator/Paginator"
import User from "./User"
import {UserSearchForm} from "./UserSearchForm"
import {FilterType, requestUsers} from "../../redux/users-reducer"
import {useDispatch, useSelector} from "react-redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getPageSize,
    getTotalUsersCount,
    getUsers,
    getUsersFilter
} from "../../redux/users-selectors";
import {AppDispatch} from "../../redux/redux-store";
import {useLocation, useNavigate, useSearchParams} from "react-router-dom";

type PropsType = {

}

type QueryParamsType = { term?: string; page?: string; friend?: string }


export const Users: React.FC<PropsType> = React.memo( (props) => {

    const users = useSelector(getUsers)
    const totalUsersCount = useSelector(getTotalUsersCount)
    const currentPage = useSelector(getCurrentPage)
    const pageSize = useSelector(getPageSize)
    const filter = useSelector(getUsersFilter)
    const followingInProgress = useSelector(getFollowingInProgress)

    const dispatch: AppDispatch = useDispatch()

    const [searchParams, setSearchParams] = useSearchParams()
    const navigate = useNavigate()
    const location = useLocation();

    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const parsed = Object.fromEntries(urlParams);
        console.log(parsed);

        let actualPage = currentPage
        let actualFilter = filter


        if (!!parsed.page) actualPage = +parsed.page
        if (!!parsed.term) actualFilter = {...actualFilter, term: parsed.term}
        switch (parsed.friend) {
            case 'null':
                actualFilter = {...actualFilter, friend: null}
                break
            case 'true':
                actualFilter = {...actualFilter, friend: true}
                break
            case 'false':
                actualFilter = {...actualFilter, friend: false}
                break

        }

        dispatch(requestUsers(actualPage, pageSize, actualFilter))
    },[])

    useEffect(() => {

        const query: QueryParamsType = {}

        if (!!filter.term) query.term = filter.term
        if (filter.friend !== null) query.friend = String(filter.friend)
        if (currentPage !== 1) query.page = String(currentPage)

        const queryToString = new URLSearchParams(query)


        navigate('/users')
        setSearchParams(queryToString.toString())

    },[filter, currentPage])


    const onPageChanged = (pageNumber: number) => {
        dispatch(requestUsers(pageNumber, pageSize, filter))
    }

    const onFilterChanged = (filter: FilterType) => {
        dispatch(requestUsers(1, pageSize, filter))
    }

    const follow = (userId: number) => {
        dispatch(follow(userId))
    }
    const unfollow = (userId: number) => {
        dispatch(unfollow(userId))
    }

    return <div>

        <UserSearchForm onFilterChanged={onFilterChanged}/>

        <Paginator
            currentPage={currentPage}
            onPageChanged={onPageChanged}
            totalItemsCount={totalUsersCount}
            pageSize={pageSize}
        />

        <div>
            {
                users.map(u => <User user={u} key={u.id}
                                     followingInProgress={followingInProgress}
                                     unfollow={unfollow}
                                     follow={follow}
                    />
                )
            }
        </div>
    </div>
})

