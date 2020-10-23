import fetch from 'isomorphic-unfetch'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { onError } from 'apollo-link-error'
import { WebSocketLink } from 'apollo-link-ws'
import { SubscriptionClient } from 'subscriptions-transport-ws'
import auth0 from './auth0';

let accessToken = null
const requestAccessToken = async () => {
  if (accessToken) return
  const res = await fetch(`${process.env.APP_HOST}/api/session`)
  if (res.ok) {
    const json = await res.json()
    accessToken = json.accessToken
  } else {
    accessToken = 'public'
  }
}