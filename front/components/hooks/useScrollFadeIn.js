import { useRef, useCallback, useEffect } from 'react';

const useScrollFadeIn = () => {
	const dom = useRef();
	// 해당 속성을 가진 dom의 ref를 반환함.
	//얕은비교를 통해 새로운 값인지, 아닌지를 판단 후 리랜더링을 하게 되는데,
	// 객체, 배열, 함수와 같은 객체들은 참조값이 아니면 새로운 값으로 판단해 불필요한 리랜더링을 하게됨.
	// 이를 방지하기 위해 useCallback을 사용함
	//useCallback은 인라인 콜백, 의존성 값을 받는다.
	const handleScroll = useCallback(([entry]) => {
		const { current } = dom;
		
		//entry가 파라미터로 쓸수 있는 것들
		//boundingClientRect : reflow현상 없이 element.getBoundingClientRect()와 동일 정보 반환
		// isIntersecting : target이 root영역에 교차되고 있는지에 대한 정보를 boolean으로 반환한다.
		  if(entry.isIntersecting) {
		  current.style.transitionProperty = 'opacity transform';
		  current.style.transitionDuration = '2s';
		  current.style.transitionTimingFunction = 'cubic-bezier(0, 0, 0.2, 0.7)';
		  current.style.transitionDelay = '0s';
		  current.style.opacity = 0.8;
		  current.style.transform = 'translate3d(0, 0, 0)';
		}
	  }, []);
	//handle scroll의 변환값을 추적함
	useEffect(() => {
	  let observer;
	  const { current } = dom;
	  
	  if (current) {
		  //callback, option 생성
		observer = new IntersectionObserver(handleScroll, { threshold: 0 });
		 // 관찰 시작.
		observer.observe(current);
		
		return () => observer && observer.disconnect();
	  };
	}, [handleScroll]);
	
	return {
	  ref: dom,
	  style: {
		opacity: 0,
		transform: 'translate3d(0, 30%, 0)',
	  }
	};
  }
export default useScrollFadeIn;