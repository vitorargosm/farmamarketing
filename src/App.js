import { Route, Switch } from 'react-router-dom'
import './index.css';

import PostsAdd from './pages/PostsAdd'
import Home from './pages/Home'
import PostsUser from './pages/PostsUser'

import Footer from './components/Footer'
import TopNavigation from './components/TopNavigation'
import Content from './components/layout/Content'
import Main from './components/layout/Main'

function App() {
  return (
    <Content>
      <TopNavigation />
      <Main>
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/add-post'>
            <PostsAdd />
          </Route>
          <Route path='/user'>
            <PostsUser />
          </Route>
        </Switch>
      </Main>
      <Footer />
    </Content>
  )
}

export default App;